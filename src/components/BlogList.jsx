import { blogs } from "../blogs/blogData";
import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <div className="w-full max-w-3xl blog-align">
    <h1 className="font-bold text-[#ccc] mb-8">Articles</h1>
    <div className="flex flex-col items-center">
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
    </div>
  );
};

export default BlogList;

