// app/components/Header.tsx
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { SiteConfig } from "../../.storyblok/types/286835241802704/storyblok-components.d.ts";
import Link from "next/link";
import Image from "next/image";

const Header = ({ siteConfig }: { siteConfig: SiteConfig }) => {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          {siteConfig.header_logo?.filename && (
            <Image
              src={siteConfig.header_logo.filename || ""}
              alt={siteConfig.header_logo.alt || ""}
              className="h-10"
              width={100}
              height={100}
            />
          )}
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {siteConfig.header_nav?.map((nestedBlok) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {siteConfig.header_buttons?.map((nestedBlok) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
