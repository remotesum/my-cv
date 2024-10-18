import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Easy Resume | Data Analysis & Full Stack Development",
  description: "A personal resume project showcasing skills in data analysis, Python, JavaScript, machine learning, and more. Includes work history, project experience, and educational background.",
  keywords: "resume, data analysis, full stack development, Python, JavaScript, machine learning, project experience",
  openGraph: {
    title: "Easy Resume - Data Analysis & Full Stack Development",
    description: "Explore a resume highlighting skills in data analysis, full stack development, and machine learning.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Resume | Data Analysis & Full Stack Development Expert",
    description: "View a personal resume focused on data analysis, full stack development, and machine learning skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
