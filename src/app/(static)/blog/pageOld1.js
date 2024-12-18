import BlogBox from "@/components/Blog/BlogBox";
import SideBar from "@/components/Blog/SideBar";
import { blogPost } from "@/lib/blogData"; // Assuming blogPost is an array of blog data

import BlogImage from "@/assets/images/blog-dummy-img.webp";

const Blog = () => {
  // Dummy Blog Data (if blogPost is not fetched from API)
  // const blogPost = [
  //   {
  //     title: "The Best Whirlpool Refrigerators of 2024: Top Picks for Every Kitchen",
  //     date: "September 27, 2024",
  //     tags: "Whirlpool Refrigerators 2024",
  //     imageSrc: BlogImage,
  //     description:
  //       "When it comes to home appliances, Whirlpool is a name that has become synonymous with reliability, innovation, and quality. Known for its wide range of high-performing refrigerators, Whirlpool continues to set the standard for what a modern refrigerator should be.",
  //     blogLink: "/blog-post",
  //   },
  // ];

  console.log("blogPost:", blogPost); // For debugging

  return (
    <div className="container px-5 max-w-1440 py-5 lg:bg-mobileBG lg:p-[14px]">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl text-[#0c2340] font-bold">
          Appliance Blog Information, Resources, & Reviews!
        </h1>
      </header>

      {/* Blog Content */}
      <div className="flex gap-10">
        <main className="flex-1">
          {/* Iterate over blogPost and pass each post to BlogBox */}
          {blogPost.map((item, index) => (
            <BlogBox key={index} items={item} />
          ))}
        </main>
        <SideBar />
      </div>
    </div>
  );
};

export default Blog;