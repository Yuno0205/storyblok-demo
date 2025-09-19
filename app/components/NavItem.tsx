// app/components/NavItem.tsx
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";
import type { NavItem } from "../../.storyblok/types/286835241802704/storyblok-components.d.ts";
import type { SbBlokData } from "@storyblok/js";

const NavItem = ({ blok }: { blok: NavItem }) => {
  return (
    <Link
      href={blok.link.cached_url}
      {...storyblokEditable(blok as SbBlokData)}
      className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      {blok.label}
    </Link>
  );
};

export default NavItem;
