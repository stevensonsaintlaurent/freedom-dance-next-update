import Navigation from "./components/navigation";

export const metadata = {
  title: "Freedom Dance Studio",
  description: "A dance studio in the heart of the city.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
