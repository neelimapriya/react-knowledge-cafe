import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark,handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`cover picture of the ${title}`}
      />
      <div className="flex justify-between mb-4 ">
        <div className="flex ">
          <img className="w-14" src={author_img}></img>
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={()=> handleAddToBookmark(blog)}
            className="pl-2 text-red-500s text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span className="pl-2 text-xl" key={idx}>
            {" "}
            <a>#{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={()=>handleMarkAsRead(reading_time)} className="text-blue-800 font-bold underline">mark as read</button>
    </div>
   
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark:PropTypes.func,
  handleMarkAsRead:PropTypes.func
};

export default Blog;
