import PropTypes from 'prop-types'

const Bookmarks = () => {
    return (
        <div className="w-full md:w-2/6">
            <h1>Bookmarks</h1>
        </div>
    );
};
Bookmarks.prototype = {
    blogs: PropTypes.object.isRequired
}
export default Bookmarks;