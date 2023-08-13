import React from "react";
import Masonry from "react-masonry-css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import images from "../imges";
import Hove from "./Hove";
import "./Gallery.css";

function GalleryDisplay() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  const GalleryImage = ({ image }) => {
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

    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseOver = () => {
      setIsHovered(true);
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    return (
      <div className="image-container">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={picVariants}
          className="img-container"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="img-fluid"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
          <motion.div
           onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}
            className="image-info"
            initial={{ opacity: 1, y: -10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : -10,
            }}
            transition={{ duration: 0.2 }} // Adjust duration as needed
          >
            <Hove />
          </motion.div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="px-5 ">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column "
      >
        {images.map((image, idx) => (
          <GalleryImage key={idx} image={image} />
        ))}
      </Masonry>
    </div>
  );
}

export default GalleryDisplay;