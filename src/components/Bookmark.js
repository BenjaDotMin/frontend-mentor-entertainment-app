import { useState } from "react";

import "../styles/Bookmark.scss";

function Bookmark({bm, id}) { 
    const [bookmarked, setBookmarked] = useState(bm);

    const setBookmark = () => {
        setBookmarked(!bookmarked);        
        let data = JSON.parse(localStorage.getItem('data'));
        data[id].isBookmarked = !bookmarked;            
        localStorage.setItem("data", JSON.stringify(data));
    }
  
    return (
        <div className="bookmark" onClick={() => setBookmark()}>
            {bookmarked ? (         
                <svg className="active" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" fill="#FFF"/></svg>
            ) : (           
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5" fill="none"/></svg>
            )}          
        </div>
    )
}

export default Bookmark;
