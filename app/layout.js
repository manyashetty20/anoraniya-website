import "./globals.css";

export const metadata = {
  title: "Anoraniya | Quantum Technology Club, RVCE",
  description: "The official Quantum Technology Club at RV College of Engineering."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
