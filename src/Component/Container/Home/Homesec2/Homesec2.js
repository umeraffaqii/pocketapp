import React,{useState,useEffect} from 'react'
import '../Homesec2/homesec2.css'
import yelowst from '../../../assets/images/svgexport-22.svg'
import rightarr from '../../../assets/images/svgexport-23.svg'
import { fileddata } from '../HomeData'
const Homesec2 = () => {
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
    <div className='home_sec2'>
        {
          isDesktop?(
<>
<div className='home_sec2_data'>
        <div className='sec2_text1'>
        <h6>process</h6>
      <div className='sec2_text1_para'>
        <p> Products that matter are anticipated, personal and relevant to people.  </p>
        <p> They aren't created by chance, nor are the fruit of inspiration. Products that matter are the end result of a curated process of ideation, incubation and implementation.</p>
      </div>



        </div>
        <div className='sec2_text2'>
        <img src={yelowst} alt="img"/>
        <p>driven design</p>


        </div>
        <div className='sec2_text3'>    
        <p>Fields of expertise</p>    
        <div className="box_dev1">
            <h4>what We Do</h4>
           <img src={rightarr} alt="img" />

            </div>

        </div>
        <div className='sec2_text4'>
        <div className='fields_of_expertise'>
        Branding & Strategy

        </div>
        <div className='fields_of_expertise'>
        Traffic Generation
        </div>
        <div className='fields_of_expertise'>
        Engagement
        </div>
        <div className='fields_of_expertise'>
        Video Views
        </div>
        <div className='fields_of_expertise'>
        Lead Generation
        </div>

        </div>

        </div>
</>
          ):(

            <>
            <p className='sec2_text11_p'>Fields of expertise</p>
            <div className='sec2_text1'>
            
            <h6>Innovation</h6>
            
            <h6><img src={yelowst} alt="img" style={{width:"50px",height:"50px"}}/> driven</h6>
            <h6>design</h6>

            <div className='sec2_text1_para'>
        <p>Services that matter are foreseen, bespoke and pertinent to people. 
  </p>
        <p> They aren't produced by 
coincidence, nor are the offspring of ingenuity. Solutions that matter are the culmination of a refined  process of conception, maturation and execution.</p>
      </div>         
         
      <div className="box_dev1">
            <h4>what We Do</h4>
           <img src={rightarr} alt="img" />

            </div>
            {
              fileddata.map((data)=>{
                return(
                  <>
                  <div className='mob_view_diff'>
                  <h3>{data.heading}</h3>
                  <span><img src={data.img} alt="yes"/></span>
                  <p>{data.para}</p>
                  


            </div>
                  </>
                )
              })
            }

            </div>
         

            </>
          )
        }
    </div>
   </>
  )
}

export default Homesec2