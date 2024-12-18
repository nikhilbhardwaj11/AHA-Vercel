"use client";
import BlogBox from "@/components/Blog/BlogBox";
import BlogImage from "@/assets/images/blog-dummy-img.webp";

const Tag = ({ params }) => {

   // Define blog post data
   const blogPost = {
    title: params?.tagType,
    date: "September 27, 2024",
    tags: "Whirlpool Refrigerators 2024",
    imageSrc: BlogImage,
    description:
      "When it comes to home appliances, Whirlpool is a name that has become synonymous with reliability, innovation, and quality. Known for its wide range of high-performing refrigerators, Whirlpool continues to set the standard for what a modern refrigerator should be.",
    blogLink: "/blog-post",
  };

  let arr = [1, 2, 3, 4];
  
  return (
    <>
     <header className="text-center mb-8">
        <h1 className="text-4xl md:text-3xl sm:text-2xl text-[#0c2340] font-bold">
          Appliance Blog Information, resources, & reviews!
        </h1>
      </header>
     {arr.map((_, index) => (
      <BlogBox key={index} {...blogPost} />
     ))}
    </>
  );
};

export default Tag;