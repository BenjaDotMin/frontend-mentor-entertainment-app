import movieIcon from "../images/icons/icon-category-movie.svg";
import tvIcon from "../images/icons/icon-category-tv.svg";
import Bookmark from "./Bookmark";
import PlayButton from "./PlayButton";
import "../styles/Card.scss";

function Card({rec}) { 
  
    return (
        <div className="card">
            <Bookmark bm={rec.isBookmarked} id={rec.id}/>
            <PlayButton/>
            <img src={rec.thumbnail.regular.large} alt={rec.title} />
            <div className="card__details">
                <ul>
                    <li>{rec.year}</li>
                    <li><img src={rec.category === "Movie" ? movieIcon : tvIcon} alt={rec.category} /> {rec.category}</li>
                    <li>{rec.rating}</li>
                </ul>
                <label>{rec.title}</label>
            </div> 
        </div>
    )
}

export default Card;
