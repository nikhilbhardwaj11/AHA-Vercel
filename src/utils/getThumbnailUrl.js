import NoImage from "@/assets/images/no-image.webp";
export const getThumbnailUrl = (productImages) => {
  if (productImages && productImages.length > 0) {
    const thumbnailImage =
      productImages.find((image) => image?.thumbnail)?.thumbnail ||
      NoImage.src;
    return thumbnailImage;
  }
};
