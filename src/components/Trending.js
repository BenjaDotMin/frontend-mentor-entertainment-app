import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {motion} from "framer-motion";  
import {staggerMotion} from "./Motion";
import FeatureCard from "./FeatureCard";
import NoResults from "./NoResults";
import 'swiper/swiper.min.css';
import "../styles/Trending.scss";

//const MotionSwiper = motion(Swiper);

function Trending({trending}) { 

    return (
        <div className="trending">
           <h1>Trending</h1>

           <div className="cards">
                <Swiper spaceBetween={16} slidesPerView={"auto"} initial="initial" animate="animate" variants={staggerMotion} breakpoints={{701: {spaceBetween: 30}, 1201: {spaceBetween: 40}}}>
                    {trending.map(trend => <motion.div key={trend.id} variants={staggerMotion}><SwiperSlide><FeatureCard trend={trend}/></SwiperSlide></motion.div>)}              
                </Swiper>   
           </div>
           <NoResults data={trending} type="trending items"/>
        </div>
    )
}

export default Trending;
