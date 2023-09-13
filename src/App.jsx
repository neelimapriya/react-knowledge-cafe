import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] =useState([])
  const [readingTime, setReadingTime] =useState(0)

  const handleAddToBookmark =blog=>{
    const newBookmark =[...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  const handleMarkAsRead =(id ,time )=>{
    const newReadingTime =readingTime+ time;
    setReadingTime (newReadingTime);


    // remove the read blog from bookmark
    // console.log('remove bookmark', id)

    const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id !== id)
    setBookmarks(remainingBookmarks)

  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
