import {motion} from "framer-motion";  
import {pageMotion, staggerMotion} from "./Motion";
import Card from "./Card";
import NoResults from "./NoResults";

function Movies({movies}) {

    return (
        <motion.div className="movies" initial="initial" animate="animate" exit="exit" variants={pageMotion}>
            <label className="section-title st">Movies</label>
            <motion.div className="cards rec" initial="initial" animate="animate" variants={staggerMotion}>
                {movies.map(movie => <motion.div key={movie.title} variants={staggerMotion}><Card rec={movie}/></motion.div>)}
            </motion.div>
            <NoResults data={movies} type="Movies"/>                
        </motion.div>
    )
}

export default Movies
