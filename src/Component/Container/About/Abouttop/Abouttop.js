import React,{useState,useEffect} from 'react'
import '../Abouttop/aboouttop.css'
import araow from '../../../assets/images/svgexport-18.svg'
import about from '../../../assets/about-img/pocketad.io_about_image1.jpg'
import yes from '../../../assets/images/yes.png'
const Abouttop = () => {
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
    <div className='about_top_section'>
    <div className='about_topsec_data'>
     {
      isDesktop?(
      <>
      <p style={{color:"black"}}>about us</p>
        <h6 className='about_para'>We engage disruptive innovation
in the sapce where business
goals meet customer delight. </h6>
      </>
    
      ):(
        <>
        <p  style={{color:"black"}}>about us</p>
        <h6 className='about_para'>building </h6>
        <h6 className='about_para' style={{display:"flex"}}><span><img src ={yes} alt="img" style={{width:"30px",height:"40px"}}/></span> togethe</h6>
       {
        !isDesktop && (
          <p className='second_para_about'> We engage disruptive innovation in the space where business goals meet customer delight.</p>
        )
       }
        </>
      )
     }
<div className='about_top_img_sec'>
<div className="arrow_div">
            <img src={araow} alt="img" />
          </div>
          <div className='about_img'>
          <img src={about} alt="yes"/>

          </div>

</div>

<div className='about_detail_para'>
{
  isDesktop && (
    <h6>about @ pocketad</h6>
  )
}
<div>
<p>PocketAd is a digital media agency that operates on a global scale, founded in 2023, with our headquarters located in the United States.</p>
<p> With a combined extensive tenure of over three decades in digital marketing, we specialize in SEA and programmatic media, showcasing our expertise through the provision of customized solutions that cater to the unique requirements of each of our clients.</p>

<p>Furthermore, PocketAd functions as a valuable user insight and business intelligence provider, procuring and analyzing third-party user data from various sources scattered throughout the internet. We uphold a steadfast commitment to maintaining the highest standards of quality and offer a diverse array of sophisticated tools and solutions to enable our clients to transmute their premium data into revenue.</p>

</div>


    <img src={about} alt="yes" className='about_2nd_img'/>
 


</div>

    </div>

    </div>
  </>
  )
}

export default Abouttop