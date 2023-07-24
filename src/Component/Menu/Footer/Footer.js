import React from "react";
import "../Footer/Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import whitecicle from "../../assets/images/svgexport-11.svg";
import linkdin from "../../assets/images/linkedin-white.svg";
import be from "../../assets/images/behance-white.svg";
import insta from "../../assets/images/Instagram-white.svg";
import fb from "../../assets/images/facebook-white.svg";
import tw from "../../assets/images/twitter-white.svg";
import angle from "../../assets/images/svgexport-43.svg";


const Footer = () => {
  return (
    <>
      <div className="footer_setion">
        <div className="footer_main">
          <div className="text_Sec">
            <div className="toch_text">
              <h6>keep in touch</h6>
              <h1>
                Let's Start <span>creating together</span>
              </h1>

              <p>
                <span className="f_span1">Drop us a line</span>{" "}
                <span className="f_span2">
                  {" "}
                  <img src={whitecicle} alt="img" />{" "}
                </span>{" "}
              </p>
            </div>
            <div className="social_icon_footer">
              <a href="">
                {" "}
                <img src={linkdin} alt="Image description" />
              </a>
              <a href="">
                {" "}
                <img src={be} alt="Image description" />
              </a>
              <a href="">
                {" "}
                <img src={insta} alt="Image description" />
              </a>
              <a href="">
                {" "}
                <img src={fb} alt="Image description" />
              </a>
              <a href="">
                {" "}
                <img src={tw} alt="Image description" />
              </a>
              
            </div>
            <div className="mob_data_text">
            <p>PocketAd</p>
           <img src={whitecicle} alt="" />

            </div>
          
          </div>
          <div className="foot_grid">
            <div className="cols_main">
              <div className="col1"><h5>Pocket Ad</h5></div>
              <div className="col1">
                <h6>main</h6>
                <div>
                  <p>Home</p>
                  <p>Services</p>
                  <p>Contact</p>
                  <p>Team</p>
                </div>
              </div>
              <div className="col1">
                <h6>Services</h6>
                <div>
                  <p>Branding & Strategy</p>
                  <p>Traffic Generation</p>
                  <p>Video Views</p>
                  <p>Lead Generation</p>
                  <p>Conversion & Sales</p>
                </div>
              </div>
              <div className="col1">
                <h6>Industries</h6>
                <div>
                  <p>Entertainment
</p>
                  <p>Media & OTT</p>
                  <p>Banking,Finance & Crypto</p>
                  <p>Insurance & insutech</p>
                  <p>Energy & Industries</p>
                  <p>Retail & Commerce
</p>
                  <p>Information Technology</p>

                </div>
              </div>
              <div className="col1">
                <h6>Contacts</h6>
                <div>
                  <p>hello@Pocketad.io</p>
                  <p>United States/United Kingdom
</p>
                
                </div>
              </div>
            </div>
            <div className="col_img">
                <img src={whitecicle} alt="" />
            </div>
          </div>
          <div className="bottom_footer">
          <div className="left_boottom">
          <p> <span>ENG</span> <img src= {angle} alt="pic" /></p>
      <div>
      <h6>term & condition</h6>
        <h6>privacy</h6>
        <h6>cookies Policy</h6>
      </div>
 </div>
          <div className="right_bottom">
          <p>2023-All rights reserved</p>
            
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
