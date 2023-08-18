import React, { useState,useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


function History() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: "0px 0px",
      });
      const picVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
          hidden: { opacity: 0.3, scale: 0.8, transition: { duration: 0.5 } },
        
    };
    const controls = useAnimation();
    React.useEffect(() => {
        if (inView) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }, [controls, inView]);
    return (
        <div>
           <motion.div 
           ref={ref}
          animate={controls}
          initial="hidden"
          variants={picVariants}
         className="bg-warning" style={{height:"400px"}}>
            <h1 > div 1</h1>
        </motion.div>
            <motion.div
         ref={ref}
         animate={controls}
         initial="hidden"
         variants={picVariants}
               className="bg-secondary" style={{ height: "400px" }}>
         <h1 > div 2</h1>
     </motion.div>
            <motion.div
         ref={ref}
         animate={controls}
         initial="hidden"
         variants={picVariants}
      className="bg-black" style={{ height: "400px" }}>
         <h1 > div 3</h1>
     </motion.div>
        </div>
        
    )
}

export default History;