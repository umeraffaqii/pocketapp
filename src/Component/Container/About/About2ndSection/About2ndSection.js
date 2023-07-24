import React,{useState,useEffect} from 'react'
import '../About2ndSection/about2ndsection.css'
import { aboutfirst } from '../Aboutdata';
const About2ndSection = () => {
  
  return (
    <>
      <div className='about_2ndsection'>
      <div className='about_2ndsec_data'>
      {
        aboutfirst.map((data)=>{
          return(
            <>
            <div className='about_explanaation_div'>
      <div className="about_explanation_heding">
      <h6><span>{data.no}</span>{data.heading} </h6>
      <img src ={data.img} alt="yes"/>

      </div>
      <div className="about_explanation_para">
      <p>{data.para}</p>

      </div>



      </div>
            </>
          )
        })
      }



      </div>

      </div>
    </>
  )
}

export default About2ndSection