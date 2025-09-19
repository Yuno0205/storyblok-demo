// app/layout.tsx
import { getStoryblokApi } from "@/lib/storyblok";
import "./globals.css";

import StoryblokProvider from "./components/StoryblokProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

// ... (các import khác giữ nguyên)

// Hàm helper để lấy dữ liệu
async function getSiteConfig() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/site-config", {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return data.story.content;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteConfig = await getSiteConfig();

  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={` antialiased`}>
          <Header siteConfig={siteConfig} />
          <main>{children}</main>
          <Footer siteConfig={siteConfig} />
        </body>
      </html>
    </StoryblokProvider>
  );
}
