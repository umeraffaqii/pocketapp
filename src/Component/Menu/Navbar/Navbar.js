import React, { useState ,useEffect} from "react";
import "../Navbar/Navbar.css";
import logo1 from "../../assets/images/eee.png";
import { Link } from "react-router-dom";
import angle from "../../assets/images/svgexport-43.svg";
import line from "../../assets/images/download.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import cross from "../../assets/images/cross.png";
import linkdin from "../../assets/images/linkedin-white.svg";
import be from "../../assets/images/behance-white.svg";
import insta from "../../assets/images/Instagram-white.svg";
import fb from "../../assets/images/facebook-white.svg";
import tw from "../../assets/images/twitter-white.svg";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const location = useLocation();
   
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
            <div className="navbar_sec">
                <div className="nabvabr_main" style={{background:location.pathname === "/about" && !isDesktop ?"#F5F5F5":"white"}}>
                    <div className="logo_div">
                       <Link to="/"><img src={logo1} alt="" /></Link> 
                    </div>
                    <div className="pages_ref">
                        <div className="pages_names_link">
                            <Link to='/' className={location.pathname === "/"?"a_tag_nav1":"a_tag_nav"} >Home</Link>
                            <Link to='/about' className={location.pathname === "/about"?"a_tag_nav1":"a_tag_nav"}>About Us</Link>
                            <Link to='/' className="a_tag_nav">Contact</Link>
                            <Link to='/' className="a_tag_nav">Services</Link>
                            <Link to='/' className="a_tag_nav">Team</Link>

                        </div>
                        <div className="nav_btn">
                            <p>Contact Us</p>

                            <p>
                                ENG <img src={angle} alt="yes" />
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="mob_toogle" onClick={handleShow}>
                        <img src={line} alt="pic" />

                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <div className="close_btn" onClick={handleClose}>
                    <img src={cross} alt="" />

                </div>
                <div className="mob_pages_name">
                    <Link to="/" onClick={handleClose}>Home
                    </Link>
                    <Link to='/about' onClick={handleClose}>About
                    </Link>
                    <Link>Contact</Link>
                    <Link>Services</Link>
                    <Link>Team</Link>


                </div>
                <div className="social_icon_nav">
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
            <div className="nav_btn_Ref">
            <div className="nav_other">
            <p>Term and condition </p>
            <p>Cookies Policy </p>
            <p>Privacy </p>


            </div>
            <div className="nav_btn1">
                       

                            <p>
                                ENG <img src={angle} alt="yes" />
                            </p>
                        </div>

            </div>
            </Modal>
        </>
    );
};

export default Navbar;
