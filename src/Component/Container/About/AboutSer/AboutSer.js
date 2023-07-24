import React from 'react'
import '../AboutSer/aboutser.css'
import circle from '../../../assets/about-img/svgexport-34.svg'
import arrow from '../../../assets/images/svgexport-23.svg'
const AboutSer = () => {
  return (
  <>
  <div className='about_last_sec'>
  <div className='about_lastsec_data'>
<div className='about_heaing_para'><p>services </p> <img src={circle} alt="img" className='last_para_image'/></div>
<div className='round_lasr_text'>
<h6>We're challengers and problem solvers. See what this amazing team is capable of.</h6>
<div className="box_dev1">
            <h4>what We Do</h4>
           <img src={arrow} alt="img" />

            </div>
</div>
<div  className='about_last_cirlce'>
<img src ={circle} alt="img"/>
</div>

  </div>

  </div>

  </>
  )
}

export default AboutSer