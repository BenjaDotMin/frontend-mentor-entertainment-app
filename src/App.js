import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";  
import Data from "./data/data.json";
import Sidebar from "./components/Sidebar"; 
import Search from "./components/Search"; 
import Home from "./components/Home";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Bookmarked from "./components/Bookmarked";

let appData;

if(!localStorage.length) {
  localStorage.setItem("data", JSON.stringify(Data)); 
  appData = JSON.parse(localStorage.getItem('data')); 
}else{
  appData = JSON.parse(localStorage.getItem('data')); 
}

function App() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const trending = appData.filter(t => t.isTrending && t.title.toLowerCase().includes(searchTerm));
  const recommended = appData.filter(r => !r.isTrending && r.title.toLowerCase().includes(searchTerm));
  const tv = appData.filter(c => c.category === "TV Series" && c.title.toLowerCase().includes(searchTerm));
  const movies = appData.filter(m => m.category === "Movie" && m.title.toLowerCase().includes(searchTerm));
  const bookmarked = appData.filter(b => b.isBookmarked && b.title.toLowerCase().includes(searchTerm));
  
  return (
    <div className="App">     
      <main>        
        <Sidebar/>    
        <div className="container">
          <Search setSearchTerm={setSearchTerm}/>       
          
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home trending={trending} recommended={recommended} />} />  
              <Route path="/tv" element={<TvShows tv={tv} />} />   
              <Route path="/movies" element={<Movies movies={movies} />} />           
              <Route path="/bookmarks" element={<Bookmarked bookmarked={bookmarked}/>} />            
            </Routes>
          </AnimatePresence>     
        </div>
         
      </main>
     
    </div>
  );
}

export default App;
