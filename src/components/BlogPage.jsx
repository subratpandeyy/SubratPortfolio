import { useParams } from "react-router-dom";
import { blogs } from "../blogs/blogData";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import matter from "gray-matter";

// Load all markdown files using Vite
const blogFiles = import.meta.glob("../blogs/*.md", {
  query: "?raw",
  import: "default" 
});

const BlogPage = () => {
  const { slug } = useParams();

  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({}); // store frontmatter

  useEffect(() => {
    const loadBlog = async () => {
      const blog = blogs.find((b) => b.slug === slug);
      if (!blog) return;

      const filePath = `../blogs/${blog.file}`;
      const loader = blogFiles[filePath];

      if (loader) {
        const raw = await loader();

        // Parse frontmatter
        const { content, data } = matter(raw);

        setContent(content);
        setMeta(data); // store metadata
      } else {
        console.error("Blog file not found:", filePath);
      }
    };

    loadBlog();
  }, [slug]);

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="container flex flex-col mx-auto">
    <div className="blog-page prose mx-auto p-4">
      {/*  Prefer frontmatter title if available */}
        <h1>{meta.title || blog.title}</h1> 

      {/* Optional metadata display */}
      {meta.date && (
        <p className="text-gray-500 text-sm">{meta.date}</p>
      )}

      {/* Markdown Content */}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
    </div>
  );
};

export default BlogPage;

