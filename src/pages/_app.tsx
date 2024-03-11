import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
// import "~/styles/styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`font-sans ${inter.variable} h-full`}>
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
