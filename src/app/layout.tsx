// app/layout.tsx (server component)
import "./globals.css";
import Navbar from "./Navbar";
import AnimationWrapper from "./AnimationWrapper";

export const metadata = {
  title: "Jayden Hagerty",
  description: "Portfolio site for Jayden Hagerty",
};

export default function RootLayout({
  children,
  bodyClass = "bg-forest-900",
}: {
  children: React.ReactNode;
  bodyClass?: string;
}) {
  return (
    <html lang="en">
      <body className={bodyClass}>
        <Navbar />
        <AnimationWrapper>{children}</AnimationWrapper>
        <footer className="bg-forest-900 text-white py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm text-off-white">
              &copy; {new Date().getFullYear()} Jayden Hagerty. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

