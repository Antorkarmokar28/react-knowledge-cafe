import { prototype } from 'postcss/lib/previous-map';
import PropTypes, { number } from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {

    const { cover, author_img, author, posted_date, reading_time, title, hashtags } = blog;

    return (
        <div className='m-10'>
            {/* cover picture */}
            <div className='w-full mb-8'>
                <img className='w-full' src={cover} alt="" />
            </div>
            {/* autor and read wrapper */}
            <div>
                <div className='flex justify-between items-center mb-4'>
                    {/* author image inner */}
                    <div className='md:flex gap-6 items-center'>
                        {/* autor image */}
                        <div className='w-16 h-16 rounded-full'>
                            <img className='w-full h-full rounded-full' src={author_img} alt={`author picture ${author_img}`} />
                        </div>
                        <div>
                            <h3 className='text-lg md:text-2xl font-bold'>{author}</h3>
                            <p className='text-lg font-semibold'>{posted_date}</p>
                        </div>
                    </div>
                    {/* read bookmarks */}
                    <div className='flex items-center gap-5'>
                        <h4 className='text-sm md:text-xl'>{reading_time} read
                        </h4>
                        <button className='text-2xl' onClick={() => handleAddToBookmark(blog)}><IoBookmarksOutline /></button>
                    </div>
                </div>
                <div>
                    <h2 className='text-lg md:text-3xl lg:text-4xl font-semibold mb-4'>{title}</h2>
                    <h4 className='text-sm md:text-xl mb-5'>
                        {
                            hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                        }
                    </h4>
                    <button 
                        onClick={() => handleReadingTime(reading_time)}
                        className='underline text-indigo-800 text-lg md:text-xl font-semibold'>Mark as read
                    </button>
                </div>
            </div>
        </div>
    );
};

Blog.prototypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired,
}

export default Blog;