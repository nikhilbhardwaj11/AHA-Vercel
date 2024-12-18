import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import SearchBar from "@/components/Blog/SearchBar"
import { Categories, RecentPostsSection, BlogTags, BlogArchive } from "@/lib/constant";
// import SearchIcon from "@/icons/SearchIcon";

// Memoized reusable Section component
const Section = memo(({ title, children }) => (
  <div className="border border-[#ededed] rounded-[8px] mb-9">
    <h3 className="font-bold py-2 px-4 text-[20px] border-b border-[#ededed]">{title}</h3>
    {children}
  </div>
));
Section.displayName = "Section";

// Memoized reusable Tag component
const Tag = memo(({ label }) => <span className="text-[16px]">{label}</span>);
Tag.displayName = "Tag";

// Memoized Sidebar Component
const SideBar = () => {
  // Pre-defined render functions

  const renderCategories = () =>
    Categories.map(({ href, label, totalPost }, index) => (
      <li className="font-semibold py-[5px] px-[9px]" key={index}>
        <Link href={`/blog/category/${href}`} className="cursor-pointer">
          {label}
        </Link>
        <span className="font-normal"> ({totalPost})</span>
      </li>
    ));

  const renderRecentPosts = () =>
    RecentPostsSection.map(({ href, img, label, postDate }, index) => (
      <li className="py-[5px]" key={index}>
        <Link href={`/blog/post/${href}`} className="cursor-pointer hover:text-[#236fa1]">
          <div className="flex gap-2 items-start"><Image
            src={img}
            alt="Recent blog post image"
            width={60}
            height={33}
            className="mt-[4px]"
          />
          <p>{label}
           <p className="text-[12px] italic">{postDate}</p>
          </p>
          </div>         
        </Link>        
      </li>
    ));

  const renderArchive = () =>
    BlogArchive.map(({ href, label }, index) => (
      <span className="whitespace-nowrap" key={index}>
        <Link href={`/blog/archive/${href}`} className="cursor-pointer hover:text-[#236fa1]">
          {label} /
        </Link>
      </span>
    ));

  const renderTags = () =>
    BlogTags.map(({ href, label }, index) => (
      <Link href={`/blog/tag/${href}`} className="cursor-pointer hover:text-[#236fa1]" key={index}>
        <Tag label={label} />
      </Link>
    ));

  return (
    <aside className="flex-1 w-full max-w-[320px] slg:max-w-none"> 
      {/* Search Section */}
      <div className="relative mb-9">
        <SearchBar/>
      </div>

      {/* Categories Section */}
      <Section title="Categories">
        <ul className="text-[14px] px-4 py-3">{renderCategories()}</ul>
      </Section>

      {/* Recent Posts Section */}
      <Section title="Recent Posts">
        <ul className="text-[14px] px-4 py-3">{renderRecentPosts()}</ul>
      </Section>

       {/* Popular Posts Section */}
       <Section title="Popular Posts">
        <ul className="text-[14px] px-4 py-3">{renderRecentPosts()}</ul>
      </Section>

      {/* Archive Section */}
      <Section title="Archive">
        <div className="text-[14px] px-4 py-3 font-semibold flex flex-wrap">{renderArchive()}</div>
      </Section>

      {/* Tags Section */}
      <Section title="Tags">
        <div className="px-4 py-3 flex gap-1 flex-wrap">{renderTags()}</div>
      </Section>
    </aside>
  );
};

SideBar.displayName = "SideBar";

export default memo(SideBar);