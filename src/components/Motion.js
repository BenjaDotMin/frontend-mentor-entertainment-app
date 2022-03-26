export const pageMotion = {
    initial: {opacity: 0, y: 10},
    animate: {opacity: 1, y: 0, transition: {duration: 0.3, ease: "easeOut"}},
    exit: {opacity: 0, y: 10, transition: {duration: 0.3, ease: "easeIn"}}
};  

export const staggerMotion = {
    initial: {opacity: 0, y: 10, transition: {ease: "easeOut"}},
    animate: {opacity: 1, y: 0, transition: {ease: "easeOut", staggerChildren: .03}}    
};  