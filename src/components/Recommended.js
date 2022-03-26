import {motion} from "framer-motion";  
import {staggerMotion} from "./Motion";
import Card from "./Card";
import NoResults from "./NoResults";
import "../styles/Recommended.scss";

function Recommended({recommended}) { 

    return (
        <div className="recommended">
           <label className="section-title">Recommended for you</label>
           <motion.div className="cards rec" initial="initial" animate="animate" variants={staggerMotion}>
               {recommended.map(rec => <motion.div key={rec.title} variants={staggerMotion}><Card rec={rec}/></motion.div>)}                        
           </motion.div>
           <NoResults data={recommended} type="recommended items"/>
        </div>
    )
}

export default Recommended;
