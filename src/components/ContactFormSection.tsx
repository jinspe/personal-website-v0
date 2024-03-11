/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/display-name */
import { HTMLProps, forwardRef, useState } from "react";

import { FieldError, useForm } from "react-hook-form";
import clsx from "clsx";

import { motion } from "framer-motion";
import { api } from "~/utils/api";
import { IContactForm, contactFormInputVerifier } from "~/utils/utils";
import { FadeIn } from "./Effects/FadeIn";

const TextInput = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement> & {
    label: string;
    error?: FieldError;
  }
>(({ label, error, ...props }, ref) => {
  return (
    <div className="group relative z-0  transition-all focus-within:z-10">
      <input
        ref={ref}
        type="text"
        id={label}
        {...props}
        placeholder=" "
        className={clsx(
          error ? "border-red-400/50" : "border-white/20",
          "peer block w-full rounded-lg border bg-black px-6 pb-4 pt-12 text-base/6 text-zinc-200 ring-0 transition duration-300 focus:border-white/70 focus:outline-none",
        )}
      />
      <label
        htmlFor={label}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 font-medium
        text-zinc-300 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold 
        peer-focus:text-zinc-200 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 
        peer-[:not(:placeholder-shown)]:font-semibold 
        peer-[:not(:placeholder-shown)]:text-zinc-200"
      >
        {label}
      </label>
      {error && (
        <span className="absolute left-6 top-0.5 origin-left text-sm font-semibold text-red-400">
          {error.message}
        </span>
      )}
    </div>
  );
});

const TextAreaInput = forwardRef<
  HTMLTextAreaElement,
  HTMLProps<HTMLTextAreaElement> & {
    label: string;
    error?: FieldError;
  }
>(({ label, error, ...props }, ref) => {
  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    target.style.height = "inherit";
    target.style.height = `${target.scrollHeight}px`;
  };

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        ref={ref}
        id={label}
        {...props}
        placeholder=" "
        onInput={handleInput}
        className={clsx(
          error ? "border-red-400/50" : "border-white/20",
          "peer block w-full whitespace-pre-wrap rounded-lg border bg-black px-6 pb-4 pt-12 text-base/6 text-zinc-200 ring-0 transition focus:border-white/70 focus:outline-none",
        )}
      />
      <label
        htmlFor={label}
        className="pointer-events-none absolute left-6 top-12 -mt-3 origin-left text-base/6 text-zinc-300 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-zinc-200 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-zinc-200"
      >
        {label}
      </label>{" "}
      {error && (
        <span className="absolute left-6 top-0.5 origin-left text-sm font-semibold text-red-400">
          {error.message}
        </span>
      )}
    </div>
  );
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: (values) => {
      return contactFormInputVerifier(values);
    },
  });
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);

  const contactFormSubmissionApi = api.post.contactFormSubmission.useMutation();

  function handleSubmitContactForm(data: IContactForm) {
    contactFormSubmissionApi.mutate(data);
    setIsContactFormSubmitted(true);
  }

  const onSubmit = handleSubmit(handleSubmitContactForm);

  return (
    <>
      <div
        className="relative"
        // onSubmit={onSubmit}
        // onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      >
        {/* <div className="absolute -inset-20 -z-20 rounded-xl bg-indigo-800/30  blur-[100px]"></div> */}
        <div className="isolate space-y-1.5">
          <TextInput
            label="Name"
            autoComplete="name"
            {...register("name")}
            error={errors.name}
          />
          <TextInput
            label="*Email"
            type="email"
            error={errors.email}
            autoComplete="email"
            {...register("email")}
          />
          <TextAreaInput
            label="*Message"
            error={errors.message}
            {...register("message")}
          />
        </div>
      </div>

      <div className="p-5 pl-3">
        {!isContactFormSubmitted ? (
          <button
            type="button"
            onClick={onSubmit}
            className="btn-cool-shadow button rounded-lg px-5 py-2.5 tracking-wider text-zinc-100"
          >
            Submit
          </button>
        ) : (
          <motion.div
            className="mt-7"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <p className="text-base/6 font-medium text-zinc-200 ">
              Thank you for reaching out! I&apos;ll be in touch soon.
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default function ContactFormSection() {
  return (
    <section
      className="relative z-0"
      id="contact"
      /* className="relative z-0 mt-24 sm:mt-32 lg:mt-40" id="contact" */
    >
      {/*       <div className="translate-z-0 absolute inset-10 rounded-full bg-slate-800/50 blur-[80px]"></div>
       */}

      <div className="z-10 mx-auto max-w-xl">
        {/* <div className="absolute inset-0 -z-10 m-auto h-[40%] w-[40%] -translate-y-[10%] rounded-full bg-indigo-900 blur-3xl"></div> */}
        <FadeIn>
          <h2 className="eyebrow">Contact</h2>
          <ContactForm />
        </FadeIn>
      </div>
      <div
        className="pointer-events-none absolute bottom-1/2 left-1/2 -z-10 h-full w-3/4 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800/50 blur-[100px]"></div>
      </div>
    </section>
  );
}
