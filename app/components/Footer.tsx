// app/components/Footer.tsx
import type { SiteConfig } from "../../.storyblok/types/286835241802704/storyblok-components.d.ts";

const Footer = ({ siteConfig }: { siteConfig: SiteConfig }) => {
  return (
    <footer className="bg-gray-100 mt-10 p-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
        <div className="mt-4">
          {/* Bạn có thể thêm các link footer từ siteConfig ở đây */}
          {/* Ví dụ: siteConfig.footer_nav_1 */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
