import React, { useState, useEffect } from "react";
import "../Homesec1/homesec1.css";
import ararow from "../../../assets/images/svgexport-18.svg";
import star from '../../../assets/about-img/svgexport-34.svg'
import rightarr from '../../../assets/images/svgexport-20.svg'
const Homesec1 = () => {
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
      <div className="home_sec1_main">
        <div className="homesec1_data">
        {
        <>
       <div className="main_div_of_website">
       <div >
          {isDesktop ? <h5>Business - challengers through quality data.</h5> : <h5>Technology - leaders through cutting edge solutions.</h5>}
          <h6>30+ years empowering business.</h6>
          </div>
          <div className="arrow_div">
            <img src={ararow} alt="img" />
          </div>
       </div>
        </>
        }
          
          <div className="homesec1_2nd_text">
          <div style={{width:isDesktop?"20%":"100%",} } className="mob_sec_view">
          <h4>How we think</h4>
          {!isDesktop&&(
            <img src={star} alt="pic" style={{width:"30px"}}/>
          ) }
          </div>
          <div className="text_challenge">
          <h5>We're challengers at the heart</h5>
          <p>PocketAd is a collective brain,formed by a diverse group of people who bring years of experience, dedication and everlasting devotion to digital craftsmanship.</p>
          <div className="box_dev">
            <h4>Dive into our culture</h4>
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

export default Homesec1;
