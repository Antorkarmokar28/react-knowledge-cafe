
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  // this usestate use for blog added to bookmark area
  const [bookmarks, setBookmarks] = useState([]);
  const [timeReading, setReadingTime] = useState(0);
  // blog added to bookmark
  const handleAddToBookmark = blog =>{
    const newBlogs = [...bookmarks, blog];
    setBookmarks(newBlogs)
  }
  // added reading to bookmark area
  const handleReadingTime = time =>{
    const newReadingTime = timeReading + time;
    setReadingTime(newReadingTime);
  }
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className='md:flex gap-6 justify-between'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
          <Bookmarks timeReading={timeReading} bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
