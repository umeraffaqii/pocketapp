import React, { useState, useEffect } from "react";
import "../HomeAcc/homeacci.css";
import Slider from "react-slick";
import star from '../../../assets/images/svgexport-22.svg'
import rightarr from '../../../assets/images/svgexport-20.svg'

const Homeacci = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 791 ? true : false);
  const updateDimensions = () => {
    setIsDesktop(window.innerWidth > 791 ? true : false);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [isDesktop]);
  return (
    <>
      <div className="acccivemnt_sec">
        <div className="accivement_data">
        {
          isDesktop ? (
            <>
            <div className="aaccvement_name_div">
            <div className="aaccvement_name">
              <p>
                {" "}
                <span>+</span>48
              </p>
              <h6>experts</h6>
            </div>
            <div className="aaccvement_name">
              <p>
                {" "}
                <span>+</span>1k
              </p>
              <h6>Projects</h6>
            </div>
            <div className="aaccvement_name">
              <p>
                {" "}
                <span>+</span>30
              </p>
              <h6>Years in Business</h6>
            </div>
            <div className="aaccvement_name">
              <p>
                {" "}
                <span>+</span>30
              </p>
              <h6>Awards</h6>
            </div>
            <div className="aaccvement_name">
              <p>
                {" "}
                <span>+</span>2
              </p>
              <h6>Offices</h6>
            </div>
          </div>
            </>
          ):(
           <>
           <Slider {...settings}>
           <div className="aaccvement_name">
              <p>
                {" "}
                <span>+</span>48
              </p>
              <h6>experts</h6>
            </div>
            <div className="aaccvement_name">
              <p>
                {" "}
                <span>+</span>1k
              </p>
              <h6>Projects</h6>
            </div>
            <div className="aaccvement_name">
              <p>
                {" "}
                <span>+</span>30
              </p>
              <h6>Years in Business</h6>
            </div>
            <div className="aaccvement_name">
              <p>
                {" "}
                <span>+</span>30
              </p>
              <h6>Awards</h6>
            </div>
            <div className="aaccvement_name">
              <p>
                {" "}
                <span>+</span>2
              </p>
              <h6>Offices</h6>
            </div>
           </Slider>
           </>
          )
        }

        <div className="homesec1_2nd_text">
          <div style={{width:isDesktop?"20%":"100%",} } className="mob_sec_view">
          <h4 className="last_home"> How we think</h4>
          {!isDesktop&&(
            <img src={star} alt="pic" style={{width:"30px"}}/>
          ) }
          </div>
          <div className="text_challenge">
          <h5 className="last_home">We use design to challenge
the world around us.</h5>
          <p >PocketAd is a collective brain,formed by a diverse group of people who bring years of experience, dedication and everlasting devotion to digital craftsmanship.</p>
          <div className="box_dev">
            <h4 >Dive into our culture</h4>
           <img src={rightarr} alt="img" />

            </div>
            
          </div>

          <div style={{width:isDesktop?"10%":"100%",display:isDesktop?"block":"none"}}>
          <img src={star} alt="pic" style={{width:"30px"}}/>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeacci;
