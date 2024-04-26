import Blog from "../Blog/Blog";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
const Blogs = ({ handleAddToBookmark, handleReadingTime }) => {
    // set data
    const [blogs, setBlogs] = useState([]);
    // load data
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <>
            <div className="w-full md:w-5/6">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                        handleReadingTime={handleReadingTime}
                    ></Blog>)
                }
            </div>
        </>
    );
};

Blogs.prototypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired,
}

export default Blogs;