import React,{useState,useEffect} from 'react'
import '../HomeThird/homethird.css'
import mobimg from '../../../assets/images/mob1.png'
import yellow from '../../../assets/images/svgexport-21.svg'
import black from '../../../assets/images/svgexport-26.svg'
import Slider from "react-slick";

const HomeThird = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
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

    <div className='home_third_sec'>
    <div className='home_third_data'>
    <div className='parallel_section'>
    <div className='parallel_text'>
        <p>Industries we know and understand</p>
        {
            isDesktop?(
                <h6>experience</h6>
            ):(
                <>
                <h6>un</h6>
                <h6>paralleled</h6>
                </>
            )
        }
       {
        isDesktop &&(
            <span><img src={black} alt="yes"/></span>
        )
       }
    </div>
    <div className='parallet_imgs'>
<img src={mobimg} alt="yes"/>
    </div>

    
    </div>
    <div className='doing_section'>
    {
        !isDesktop &&(
            <span><img src={black} alt="yes"/></span>
        )
       }
    {
        isDesktop && (
            <img src={yellow} alt="yes"/>
        )
    }
    <h6> { !isDesktop && (<img src={yellow} alt="yes" style={{paddingRight:"20px"}}/>)} We know what we're doing</h6>
    <p>We have spent +30 years creating and
re-creating digital solutions, and
learned what makes great businesses
stay in business.</p>

    </div>

    </div>
   <div className='logo_sec' style={{display:isDesktop?"flex":"",justifyContent:isDesktop?"space-between":"",alignItems:isDesktop?"center":""}}>
   {
    isDesktop ? (
        <>
        <div className='logo_img_sec'>
<p>viacom</p>
   </div>
   <div className='logo_img_sec'>
   <p>avon</p>
   </div>
   <div className='logo_img_sec'>
   <p>mercado libra</p>
   </div>
   <div className='logo_img_sec'>
   <p>VISA</p>
   </div>
   <div className='logo_img_sec'>
   <p>IBM</p>
   </div>
   <div className='logo_img_sec'>
   <p>A&E</p>
   </div>
   <div className='logo_img_sec'>
   <p>ICBC</p>
   </div>
        </>
    ):(
<>
<Slider {...settings}>
<div className='logo_img_sec'>
<p>viacom</p>
   </div>
   <div className='logo_img_sec'>
   <p>avon</p>
   </div>
   <div className='logo_img_sec'>
   <p>mercado libra</p>
   </div>
   <div className='logo_img_sec'>
   <p>VISA</p>
   </div>
   <div className='logo_img_sec'>
   <p>IBM</p>
   </div>
   <div className='logo_img_sec'>
   <p>A&E</p>
   </div>
   <div className='logo_img_sec'>
   <p>ICBC</p>
   </div>
</Slider>
</>
    )
   }


   </div>


    </div>
 </>

  )
}

export default HomeThird