import "./globals.css";
import Nav from "./nav";

export const metadata = {
 title: "My Portfolio",
 icons: {
    icon: "/man.png",        
    shortcut: "/man.png",    
    apple: "/man.png",       
  },
  description: "Full-stack web developer based in Lagos, Nigeria.",
  keywords: ["Full-stack", "Web Developer", "fullstack developer", "react", "nextjs", "developer", "portfolio"],
  authors: [{ name: "Chidubem Emeka-Ogbu" }],
  openGraph: {
    title: "My Website",
    description: "Full-stack web developer based in Lagos, Nigeria.",
    url: "https://mywebsite.com",
    siteName: "My Portfolio",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "My Website Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mytwitterhandle",
    creator: "@mytwitterhandle",
    title: "My Website",
    description: "Full-stack web developer based in Lagos, Nigeria.",
    images: ["/image.png"],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
     <html>
      <body>
        <Nav/>
        {children}
        </body>
    </html>
  )
}

