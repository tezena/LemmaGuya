import React from "react";


function HeroSection() {
    // State to track whether the component has fully loaded
    const [isLoaded, setIsLoaded] = React.useState(false);

    // Set isLoaded to true after a slight delay
    React.useEffect(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    }, []);
  return (
    <div style={{
      backgroundImage: 'url(edubg.jpg)', opacity: 1,
      backgroundPosition: "center", backgroundSize:"cover",height:"400px" }} className="overflow-hidden ">

      <div className="hero-bg text-light  pb-5" style={{ height: "100%" }}>
        <div className="row p-4 pb-0  pt-lg-5 h-100 align-items-center rounded-3 border shadow-lg mx-auto">
        <div className=" col-md-5 col-12">
            <div className="row h-25  pb-1 ">
            <div className={`col-6 ${isLoaded ? 'img-left' : ''}`}>
                <img src="/assets/images/img3.jpg" alt="" className="img-fluid" />
              </div>
              <div className={`col-6 ${isLoaded ? 'img-right' : ''}`}>
                <img src="/assets/images/img3.jpg" alt="" className=" img-fluid" />
              </div>
            </div>
          
          </div>
          <div className="col-1">

          </div>
          <div className=" col-md-6 col-12 p-3 pb-lg-5   bg-black bg-opacity-50 p-lg-1 ">
            <h1 className="display-4 fw-bold lh-1 fs-3 ">Lemma Guyya Foundation</h1>
            <p className="lead fs-6 ">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-warning btn-lg text-light px-4 me-md-2 fw-bold"
              >
                Donate
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
