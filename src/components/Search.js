import MagGlass from "../images//icons/icon-search.svg";
import "../styles/Search.scss";

function Search({setSearchTerm}) {     
    
    return (
        <div className="search">
            <img src={MagGlass} alt="Search icon" />
            <input type="text" placeholder="Search for movies or TV series" onKeyUp={e => setSearchTerm(e.target.value)}/>
        </div>
    )
}

export default Search;
