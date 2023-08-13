import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./style.css";

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
      backgroundImage: 'url(herobg.jpg)', opacity: 1,
      backgroundPosition: "center", backgroundSize:"cover" }}>

      <div className="hero-bg text-light" style={{ height: "100vh" }}>
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 h-100 align-items-center rounded-3 border shadow-lg m-0">
          <div className="col-lg-6 p-3 p-lg-5 pt-lg-3 bg-black bg-opacity-50">
            <h1 className="display-4 fw-bold lh-1">Lemma Guyya Foundation</h1>
            <p className="lead">
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
          <div className="col-lg-6">
            <div className="row h-100">
            <div className={`col-6 ${isLoaded ? 'img-left' : ''}`}>
                <img src="/assets/images/img1.jpg" alt="" className="img-fluid" />
              </div>
              <div className={`col-6 ${isLoaded ? 'img-right' : ''}`}>
                <img src="/assets/images/img2.jpg" alt="" className=" img-fluid" />
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
