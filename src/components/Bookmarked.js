import {motion} from "framer-motion";  
import {pageMotion, staggerMotion} from "./Motion";
import NoResults from "./NoResults";
import Card from "./Card";

function Bookmarked({bookmarked}) {

    return (
        <motion.div className="bookmarked st" initial="initial" animate="animate" exit="exit" variants={pageMotion}>
            <label className="section-title st">Bookmarked Movies</label>
            <motion.div className="cards rec sb" initial="initial" animate="animate" variants={staggerMotion}>
                {bookmarked.map(bm => <motion.div key={bm.title} variants={staggerMotion}><Card rec={bm}/></motion.div>)}
            </motion.div>
            <NoResults data={bookmarked} type="bookmarked Movies"/>

            <label className="section-title st">Bookmarked TV Series</label>
            <motion.div className="cards rec" initial="initial" animate="animate" variants={staggerMotion}>
                {bookmarked.map(bm => <motion.div key={bm.title} variants={staggerMotion}><Card rec={bm}/></motion.div>)}
            </motion.div>
            <NoResults data={bookmarked} type="bookmarked TV series"/>        
        </motion.div>
    )
}

export default Bookmarked
