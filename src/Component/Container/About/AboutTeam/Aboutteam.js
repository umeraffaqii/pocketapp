import React, { useState, useEffect ,useRef} from "react";
import "../AboutTeam/aboutteam.css";
import Slider from "react-slick";
import { teamdata } from "../Aboutdata";
import arorw from '../../../assets/images/svgexport-20.svg'
const Aboutteam = () => {
  const sliderRef = useRef(null);
  const totalSlides = teamdata.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    // Your settings for the slider here
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const handleSliderClick = (direction) => {
    if (direction === 'left') {
      sliderRef.current.slickPrev();
    } else if (direction === 'right') {
      sliderRef.current.slickNext();
    }
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
<div>
      <Slider ref={sliderRef} {...settings}>
        {teamdata.map((data) => (
          <div key={data.headig} className="team_intro">
            <h6>{data.headig}</h6>
            <p dangerouslySetInnerHTML={{ __html: data.para }}></p>
          </div>
        ))}
      </Slider>
      <div className="slider_controls">
        <button onClick={() => handleSliderClick('left')}><img src={arorw} alt="arrow" className="first_arrow"/></button>
        <span>{`${currentSlide + 1} / ${totalSlides}`}</span>
        <button onClick={() => handleSliderClick('right')}><img src={arorw} alt="arrow" /></button>
      </div>
    </div>

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
