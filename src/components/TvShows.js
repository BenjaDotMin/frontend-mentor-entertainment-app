import {motion} from "framer-motion";  
import {pageMotion, staggerMotion} from "./Motion";
import Card from "./Card";
import NoResults from "./NoResults";

function TvShows({tv}) {

    return (
        <motion.div className="tv-shows" initial="initial" animate="animate" exit="exit" variants={pageMotion}>
            <label className="section-title st">TV Series</label>
            <motion.div className="cards rec" initial="initial" animate="animate" variants={staggerMotion}>
                {tv.map(show => <motion.div key={show.title} variants={staggerMotion}><Card rec={show}/></motion.div>)}
            </motion.div>
            <NoResults data={tv} type="TV series"/>           
        </motion.div>
    )
}

export default TvShows
