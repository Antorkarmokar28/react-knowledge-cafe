import PropTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div className='bg-white mb-4 p-5 rounded-lg'>
            <h4 className='text-xl font-semibold'>{title}</h4>
        </div>
    );
};
Bookmark.prototypes = {
    bookmark: PropTypes.object,
}
export default Bookmark;