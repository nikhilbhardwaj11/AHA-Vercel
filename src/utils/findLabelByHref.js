import { NavigationLink, ResourcesLink, StaticLink } from "@/lib/constant";

const mergedLinks = [...StaticLink, ...ResourcesLink, ...NavigationLink];

export const findLabelByHref = (href) => {
  const match = mergedLinks.find((link) => link?.href?.slice(1) === href);
  return match ? match.label : decodeURIComponent(href);
};
