// app/components/Button.jsx
import { storyblokEditable } from "@storyblok/react/rsc";

export default function Button({ blok }: { blok: any }) {
  // Dữ liệu của button blok
  return (
    <a
      href={blok.link.cached_url}
      {...storyblokEditable(blok)}
      className="button"
    >
      {blok.label}
    </a>
  );
}
