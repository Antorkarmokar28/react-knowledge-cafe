import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, timeReading }) => {

    return (
        <div className="w-full md:w-2/6 mt-12 bg-slate-50 p-5 rounded-lg">
            <div className='bg-slate-200 text-center p-5 rounded-xl mb-5'>
                <h4 className='text-indigo-600 text-xl font-semibold'>Spent time on read : {timeReading} min</h4>
            </div>
            <div>
                <h4 className='text-xl font-semibold mb-3'>Bookmarks Blogs:{bookmarks.length}</h4>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.prototypes = {
    bookmarks: PropTypes.array,
    timeReading: PropTypes.number,
}
export default Bookmarks;