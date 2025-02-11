import BackToTopButton from "@/components/BackToTopButton";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeContext";

export const metadata = {
  title: "tpuchal",
  description: "my personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let theme = localStorage.getItem("theme") || "light";
                document.documentElement.setAttribute("data-theme", theme);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`font-mono antialiased flex-col min-h-screen]` }
      >
        <ThemeProvider>
          <BackToTopButton/>
          <Header/>
          <main className="flex-grow md:px-8 px-2 flex-col">
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
