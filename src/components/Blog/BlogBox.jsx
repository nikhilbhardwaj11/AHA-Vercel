import Link from "next/link";
import Image from "next/image";

// Props for reusability
const BlogBox = ({ index, items }) => {
  // Destructure props for clarity
  const { title, date, tags, imageSrc, description, blogLink } = items;

  return (
    <article className="p-5 border border-gray-200 rounded-lg mb-5">
      <div className="flex flex-row lg:flex-col 2xl:w-full slg:flex-col sm:flex-col gap-5 items-start">
        {/* Blog Image */}
        <Image
          src={imageSrc}
          alt={title}
          width={270}
          height={150}
          priority
          placeholder="blur" // Optional if you have a blur placeholder image
          className="rounded-lg md:w-full lg:w-full"
        />

        {/* Blog Content */}
        <div className="md:w-full">
          {/* Blog Title */}
          <h2 className="mb-4 text-lg font-semibold">{title}</h2>

          {/* Blog Meta Information */}
          <div className="text-xs flex gap-3 pb-4">
            <p>
              <i className="mf-blog-icon mfbi-calendar"></i>
              Posted: <span className="italic">{date}</span>
            </p>
            <p>
              <i className="mf-blog-icon mfbi-tags"></i>
              Tags: {tags}
            </p>
          </div>

          {/* Blog Description */}
          <p className="text-sm leading-6 mb-4">{description}</p>

          {/* Read More Button */}
          <Link href={blogLink} passHref>
            <button
              className="uppercase text-sm px-8 py-2 bg-gray-100 rounded-sm hover:bg-[#071d3e] hover:text-white transition-colors"
              title={`Read more about ${title}`}
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogBox; // memo(BlogBox) can be added for optimization if needed
