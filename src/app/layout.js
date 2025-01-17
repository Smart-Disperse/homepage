import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Smart Disperse",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="googleanalytics_layout"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E7NY2W59JZ"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${"${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"});
         `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}
