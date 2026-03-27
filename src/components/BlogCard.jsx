import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="w-full flex flex-row">
      <Link to={`/blog/${blog.slug}`} 
        className="flex items-center p-2 border-[#4B5563] gap-4 w-full justify-between rounded-xl hover:bg-[#0d1117] duration-300 transition-full" >
      <img src={blog.image} alt={blog.title} 
      className="h-[100px] w-auto rounded-lg"
      />
      <div className="p-4">
        <h2 className="text-lg lg:text-2xl font-bold text-[#ccc]">{blog.title}</h2>
        <p className="text-sm text-gray-500 text-end">{blog.date}</p> 
      </div>
      </Link>
    </div>
  );
}

export default  BlogCard;
