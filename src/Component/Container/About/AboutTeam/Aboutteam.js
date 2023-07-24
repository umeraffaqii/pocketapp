import React, { useState, useEffect } from "react";
import "../AboutTeam/aboutteam.css";
import Slider from "react-slick";
import { teamdata } from "../Aboutdata";
const Aboutteam = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
      <div className="about_team_sec">
        <div className="about_team_data">
          <div className="team_haeding_div">
            <h6>leadership </h6>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
              {isDesktop && <p>We organize our work around practices, and each practice is led by skilled mentors that bring all of their experience and proficiency to their team. These are the referents that lead the way in our everyday craft.</p>}
              <h6> team</h6>
            </div>

            {!isDesktop && <p>We organize our work around practices, and each practice is led by skilled mentors that bring all of their experience and proficiency to their team. These are the referents that lead the way in our everyday craft.</p>}
          </div>
          <div className="team_member_section">
           
            {
            isDesktop?(
<>
{teamdata.map((data) => {
              return (
                <>
                  <div className="team_intro">
                    <h6>{data.headig}</h6>
                    <p dangerouslySetInnerHTML={{ __html: data.para }}></p>
                   
                  </div>
                </>
              );
            })}
</>
            ):(
<>
<Slider {...settings}>

{teamdata.map((data) => {
              return (
                <>
                  <div className="team_intro">
                    <h6>{data.headig}</h6>
                    <p dangerouslySetInnerHTML={{ __html: data.para }}></p>
                   
                  </div>
                </>
              );
            })}

</Slider>
  
</>
            )
          }
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Aboutteam;
