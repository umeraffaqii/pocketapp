import React,{useState,useEffect,useRef} from 'react'
import '../Homeindus/homeindus.css'
import rightarr from '../../../assets/images/svgexport-23.svg'
import Slider from "react-slick";
import { induxdata } from '../HomeData';
import arorw from '../../../assets/images/svgexport-20.svg'
const Homeindus = () => {
  const sliderRef = useRef(null);
  const totalSlides = induxdata.length;
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

      <div className='home_indux'>
        <div className='home_indux_data'>
          <h6>Within these 7 industries</h6>
          {isDesktop ? (
            <>
              {induxdata.map((data) => {
                return (
                  <>
                    <div className='indus_div'>
                      <div className='indus_headig'>
                        <h5>{data.heading}</h5>
                      </div>
                      <div className='indus_para'>
                        <h6>{data.para}</h6>
                        <div className="box_dev1">
                          <h4>what We Do</h4>
                          <img src={rightarr} alt="img" />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <>
              <Slider ref={sliderRef} {...settings}>
                {induxdata.map((data) => {
                  return (
                    <>
                      <div className='indus_div'>
                        <div className='indus_headig'>
                          <h5>{data.heading}</h5>
                        </div>
                        <div className='indus_para'>
                          <h6>{data.para}</h6>
                          <div className="box_dev1">
                            <h4>what We Do</h4>
                            <img src={rightarr} alt="img" />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
              <div className="slider_controls1">
                <button onClick={() => handleSliderClick('left')}>
                  <img src={arorw} alt="arrow" className="first_arrow" />
                </button>
                <span>{`${currentSlide + 1} / ${totalSlides}`}</span>
                <button onClick={() => handleSliderClick('right')}>
                  <img src={arorw} alt="arrow" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Homeindus