import {motion} from "framer-motion";  
import {pageMotion} from "./Motion";
import Trending from "./Trending";
import Recommended from "./Recommended";

function Home({trending, recommended}) {

    return (
        <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion}>   
            <div className="home">                
                <Trending trending={trending}/>       
                <Recommended recommended={recommended}/>                            
            </div>
        </motion.div>   
    )
}

export default Home
