// app/components/Feature.tsx
import { type FeatureStoryblok } from "../../.storyblok/types/286835241802704/storyblok-components.d.ts";
import { storyblokEditable } from "@storyblok/react/rsc";

// Sử dụng kiểu "FeatureStoryblok" đã được tạo sẵn
export default function Feature({ blok }: { blok: FeatureStoryblok }) {
  return (
    <div {...storyblokEditable(blok)} className="feature">
      <span>{blok.name}</span>
    </div>
  );
}
