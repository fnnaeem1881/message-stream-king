export type FooterLink = { name: string; href: string };
export type FooterSection = { title: string; links: FooterLink[] };
export type SocialIcon = "github" | "twitter" | "linkedin" | "youtube";
export type SocialLink = { label: string; href: string; icon: SocialIcon };
export type FooterContent = {
  sections: FooterSection[];
  social: SocialLink[];
  legal: FooterLink[];
};

import { apiGet } from "./client";

export function getFooterContent() {
  return apiGet<FooterContent>("/data/footer.json");
}

export function isExternalLink(href: string) {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}
