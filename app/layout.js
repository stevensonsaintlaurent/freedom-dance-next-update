import Logo from "./_components/Logo";
import Navigation from "./_components/navigation";
import "./_styles/globals.css";

export const metadata = {
  title: {
    template: "%s | Freedom Dance Studio",
    default: "Welcome | Freedom Dance Studio",
  },
  description: "A dance studio in the heart of the city.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
