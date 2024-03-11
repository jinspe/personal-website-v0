import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { IContactForm, contactFormInputVerifier } from "~/utils/utils";
import { google } from "googleapis";
import { env } from "~/env.js";

const googleAuthScopes = ["https://www.googleapis.com/auth/spreadsheets"];

interface GoogleSheetCredentials {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
}

async function saveFormDataToGoogleSheets(values: string[][], range: string) {
  const credentials = JSON.parse(
    env.GOOGLE_SHEETS_API_CREDENTIALS,
  ) as GoogleSheetCredentials;

  const client = await google.auth.getClient({
    credentials,
    scopes: googleAuthScopes,
  });

  const sheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = env.CONTACT_FORM_GOOGLE_SHEET_ID;

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    requestBody: {
      values,
    },
  });

  console.log("Data appended successfully:", response.data);
}

async function saveContactFormGoogleSheet(contactForm: IContactForm) {
  const values = [
    [
      new Date().toLocaleString("en-GB", {
        timeZone: "Europe/Zurich",
      }),
      contactForm.email,
      "Perso website",
      "-",
      contactForm.message,
      contactForm.name,
      "-",
    ],
  ];
  const range = "contact!A2:G2";
  await saveFormDataToGoogleSheets(values, range);
}
export const postRouter = createTRPCRouter({
  contactFormSubmission: publicProcedure
    .input(
      z.object({
        name: z.string().optional(),
        email: z.string(),
        message: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      // simulate a slow db call
      const { name, email, message } = input;
      const { errors } = contactFormInputVerifier({
        name: name ?? "",
        email,
        message,
      });

      Object.values(errors).forEach((error) => {
        if (error) throw new Error(error.message?.toString());
      });

      try {
        await saveContactFormGoogleSheet({
          email,
          message,
          name: name ?? "No name",
        });
        return { success: true };
      } catch (error) {
        console.log(
          "contactFormSubmission saveContactFormGoogleSheet error",
          error,
        );
        throw new Error("Failed to submit form");
      }
    }),
});
