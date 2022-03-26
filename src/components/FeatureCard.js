import movieIcon from "../images/icons/icon-category-movie.svg";
import tvIcon from "../images/icons/icon-category-tv.svg";
import Bookmark from "./Bookmark";
import PlayButton from "./PlayButton";
import "../styles/FeatureCard.scss";

function FeatureCard({trend}) { 

    return (
        <div className="feature-card">
            <img src={trend.thumbnail.trending.large} alt={trend.title} />
            <Bookmark bm={trend.isBookmarked} id={trend.id}/>
            <PlayButton/>
            <div className="feature-card__details">
                <ul>
                    <li>{trend.year}</li>
                    <li><img src={trend.category === "Movie" ? movieIcon : tvIcon} alt={trend.category} /> {trend.category}</li>
                    <li>{trend.rating}</li>
                </ul>
                <label>{trend.title}</label>
            </div>            
        </div>
    )
}

export default FeatureCard;
