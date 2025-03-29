import "./globals.css";
import { Roboto, Outfit } from "next/font/google";
import { Parkinsans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto", // Specify the weights you need
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-outfit", // Specify the weights you need
});

const parkinsans = Parkinsans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-parkinsans", // Specify the weights you need
});

export const metadata = {
  title: "Dennis k. Bamfo",
  description: "Dennis Bamfo's Personal Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
