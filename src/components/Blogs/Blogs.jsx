import Blog from "../Blog/Blog";
import { useEffect, useState } from "react";

const Blogs = () => {
    // set data
    const [blogs, setBlogs] = useState([]);
    // load data
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-full md:w-5/6">
            <h1>Blogs</h1>
            <h1>{blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;