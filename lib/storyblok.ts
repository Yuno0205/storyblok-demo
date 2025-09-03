import Feature from "@/app/components/Feature";
import Grid from "@/app/components/Grid";
import Page from "@/app/components/Page";
import Teaser from "@/app/components/Teaser";
import HeroSection from "@/app/components/HeroSection";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    "default-page": Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    "hero-section": HeroSection,
    "tabbed-content-section": Page,
    "grid-section": Page,
    "image-text-section": Page,
    "newsletter-form-section": Page,
    "featured-articles-section": Page,
    "banner-reference": Page,
  },
  apiOptions: {
    region: "eu",
  },
});
