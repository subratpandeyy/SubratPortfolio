import { blogs } from "../blogs/blogData";
import BlogCard from "./BlogCard";
import { Fragment } from 'react';

const BlogList = () => {
  return (
    <div className="w-full max-w-3xl blog-align">
    <h1 className="font-bold text-[#ccc] mb-8">Articles</h1>
    <div className="border border-[#4B5563] bg-[#010409] rounded-2xl p-2 lg:p-4 flex flex-col h-[300px] overflow-y-auto items-center">
      {blogs.map(blog => (
        <Fragment key={blog.slug}>
        <BlogCard blog={blog}/>
        <hr/>
        </Fragment>
      ))}
    </div>
    </div>
  );
};

export default BlogList;

