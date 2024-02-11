import "./globals.css";
import Font from "@/components/Font";

export const metadata = {
  title: "Ensemble | CSE Dept Fest @ RIT Kottayam",
  description:
    "Ensemble is the technical fest of the CSE department at RIT Kottayam, Kerala. It is a platform for students to showcase their technical skills and knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Font />
      </head>
      <body className="h-screen w-screen overflow-hidden">{children}</body>
    </html>
  );
}
