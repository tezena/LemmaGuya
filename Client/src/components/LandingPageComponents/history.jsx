import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function History() {
  const divVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0.3, scale: 0.8, transition: { duration: 0.5 } },
  };
  const imgVariants = {
    visible: { opacity: 1, scale: 1.1, transition: { duration: 2 } },
    hidden: { opacity: 0.1, scale: 0, transition: { duration: 1 } },
  };
  const textVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0, scale: 0, transition: { duration: 1 } },
  };

  const animateDivOnInView = (controls, inView) => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  };

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });
  const controls4 = useAnimation();
  const [ref4, inView4] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });
  const controls5 = useAnimation();
  const [ref5, inView5] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });
  const controls6 = useAnimation();
  const [ref6, inView6] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });
  const controls7 = useAnimation();
  const [ref7, inView7] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });
  const controls8 = useAnimation();
  const [ref8, inView8] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });
  const controls9 = useAnimation();
  const [ref9, inView9] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });



  useEffect(() => {
    animateDivOnInView(controls1, inView1);
  }, [controls1, inView1]);

  useEffect(() => {
    animateDivOnInView(controls2, inView2);
  }, [controls2, inView2]);

  useEffect(() => {
    animateDivOnInView(controls3, inView3);
  }, [controls3, inView3]);
  useEffect(() => {
    animateDivOnInView(controls4, inView4);
  }, [controls4, inView4]);
  useEffect(() => {
    animateDivOnInView(controls5, inView5);
  }, [controls5, inView5]);
  useEffect(() => {
    animateDivOnInView(controls6, inView6);
  }, [controls6, inView6]);
  useEffect(() => {
    animateDivOnInView(controls7, inView7);
  }, [controls7, inView7]);
  useEffect(() => {
    animateDivOnInView(controls8, inView8);
  }, [controls8, inView8]);
  useEffect(() => {
    animateDivOnInView(controls9, inView9);
  }, [controls9, inView9]);


  return (
    <div>
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={divVariants}
        className="bg-warning row"
        style={{ height: "500px",width:"100vw" }}
      >
        <div className="col-12  col-md-8 mx-auto ">
          <div className="pt-5 row">
            <div className="col-7 text-white opacity-75 text-start ms-3 p-2 mt-5 px-md-5 " style={{wordSpacing:"0.1px",lineHeight:"20px"}}> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d
              olore eu fugiat nulla pariatur.</div>
              <div className="col-4  col-md-3 ">
              <div initial="hidden"
        animate={controls4}
                variants={imgVariants}><img ref={ref4} src="assets/images/lemma/l14.jpg" className="w-100 pt-5 mt-3 pt-md-3 " style={{ widt: "100%" }} /></div>
       
         </div>
              
          </div>
          
         
          
        </div>
        <div className="col-12 d-none d-md-block col-md-4 ">

        </div>
       
      </motion.div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={divVariants}
        className=" row"
        style={{ height: "500px",width:"100vw" }}
      >
        <div className="col-12  col-md-7 mx-auto order-1 ps-4 ">
          <div className="pt-5 row">
            <motion.p
        ref={ref6}
              initial="hidden"
              variants={textVariants}
        animate={controls6} className="col-7 order-1 opacity-75 text-start me-3 p-2 mt-5 px-md-5 " style={{wordSpacing:"0.1px",lineHeight:"20px"}}> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d
              olore eu fugiat nulla pariatur.</motion.p>
              <div className="col-4  col-md-3 ">
              <motion.div  initial="hidden"
        animate={controls7}
                variants={imgVariants}><img ref={ref7} src="assets/images/lemma/l15.jpg" className="w-100 pt-5 mt-3 pt-md-5 order-0" style={{ widt: "100%" }} /></motion.div>
       
         </div>
              
          </div>
          
         
          
        </div>
        <div className="col-12 d-none d-md-block col-md-5 order-0  ">

        </div>
       
      </motion.div>

      <motion.div
        ref={ref3}
        initial="hidden"
        animate={controls3}
        variants={divVariants}
        className="bg-warning row"
        style={{ height: "500px",width:"100vw" }}
      >
        <div className="col-12  col-md-8 mx-auto ">
          <div className="pt-5 row">
            <div
        ref={ref8}
              initial="hidden"
              variants={textVariants}
        animate={controls8} className="col-7 text-white opacity-75 text-start ms-3 p-2 mt-5 px-md-5 " style={{wordSpacing:"0.1px",lineHeight:"20px"}}> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d
              olore eu fugiat nulla pariatur.</div>
              <div className="col-4  col-md-3 ">
              <div  initial="hidden"
        animate={controls9}
                variants={imgVariants}><img ref={ref9} src="assets/images/lemma/l13.jpg" className="w-100 pt-5 mt-3 pt-md-5 " style={{ widt: "100%" }} /></div>
       
         </div>
              
          </div>
          
          
        </div>
        <div className="col-12 d-none d-md-block col-md-4 ">

        </div>
       
      </motion.div>
    </div>
  );
}

export default History;
