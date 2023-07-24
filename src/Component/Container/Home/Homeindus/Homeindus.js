import React,{useState,useEffect} from 'react'
import '../Homeindus/homeindus.css'
import rightarr from '../../../assets/images/svgexport-23.svg'
import Slider from "react-slick";
import { induxdata } from '../HomeData';
const Homeindus = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: false,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
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
        <h6>
        Within these 7 industries
        </h6>
      {
        isDesktop?(
          <>
        {
induxdata.map((data)=>{
  return(
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
  )
})
        }
          </>
        ):(
          <Slider {...settings}>
          {
induxdata.map((data)=>{
  return(
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
  )
})
        }
          </Slider>
        )
      }

        </div>
      </div>
    </>
  )
}

export default Homeindus