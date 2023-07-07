<script setup>
const isDesktop = typeof window !== "undefined" && window.innerWidth > 770;
</script>

<template>

<main v-if="isDesktop" class=" relative bg-gradient-to-br from-inherit" >
        <img src="../icons/pocketad.io_home_image1.png" class=" w-full  mx-auto text-center mb-0 h-[705px] absolute mix-blend-soft-light ">

        <div class="w-full h-full "  >
        <!-- <img  alt="" class="w-full h-full"/>     -->
        <img src="" alt="">
            <section class=" text-white  ">
                        <div class="md:flex justify-between ">
                    <h1 class="font-bold text-[115px] ml-24 mt-12 tracking-wide ">Innovation  </h1>
                    <p class=" text-xs w-2/12 mt-5 mr-24"> Services that matter are foreseen, bespoke and pertinent to people.  <span class="block mt-5 ">They aren't produced by coincidence, nor are the offspring of ingenuity. Solutions that matter are the culmination of a refined  process of conception, maturation and execution.</span> </p>
                </div>
                <div class=" grid grid-cols-11 ml-72  mb-5">
                    <img src="../new_incons/svgexport-22.png" class="col-span-1 mr-6 mt-11" alt="">
                    <span class="col-span-10 font-bold text-[115px] tracking-wide place-self-start "> driven design </span>
                </div>
                <div class="md:flex justify-between items-center mt-16 mb-5 ">
                    <p class="text-gray-900 ml-16 font-semibold">Fields of expertise</p>
                    <p  class="mr-52 inline-flex">
                        <span type="text" class="rounded-full p-2 bg-slate-800 text-gray-100 text-xs px-3">What we do </span>
                        <span>  <img src="../new_incons/svgexport-23.png" class="rounded-full p-2 bg-slate-800  text-xs " /> 
                        </span>
                    </p>
                </div>
                <div class="inline-flex w-full mt-9 ">
                    <p class=" border-r-2 pl-2 ml-4 w-1/5 top-0 h-40"> Branding & Strategy </p>
                    <p class=" border-r-2 pl-2 ml-4 w-1/5 top-0 h-40"> Traffic Generation  </p>
                    <p class=" border-r-2 pl-2 ml-4 w-1/5 top-0 h-40"> Engagement </p>
                    <p class=" border-r-2 pl-2 ml-4 w-1/5 top-0 h-40"> Video Views </p>
                    <p class=" border-r-2 pl-2 ml-4 w-1/5 top-0 h-40"> Lead Generation </p>
                    
                </div>

            </section>
            
        </div>
   
    </main>
    <main v-if="isDesktop" class="mb-20 mt-16" >
    <section class="w-full grid grid-cols-11  x-auto mt-10   " >
        
            <div class=" col-span-4 mt-5 ml-10  ">
                <p class=" ml-28 text-xs font-semibold"> Industries we know <span class="block"> and understand</span>
                </p>
                <p class=" mt-10 text-[110px] ml-20 font-bold"> unpara <span class="block">lleled</span> 
                </p>
                <img src="../new_incons/svgexport-20.png" class="  w-10 mt-10 rotate-90 rounded-full p-3 ml-28 mb-20" style="background:#ffff05;">
                
            </div>
            <div class=" col-span-3 "><img src="../icons/pocketad.io_home_image2_mobile.png"  class=" pl-16 object-cover w-80 "></div>
            <div class=" col-span-4 mt-5 ml-16  ">
            <img src="../new_incons/svgexport-21.png" class=" ml-14 mt-6  ">    
            <p class="mt-10  ml-12 mb-12 font-se">We know what <span class="block">We're doing</span> </p>
            <p class="mt-10 ml-12 text-xs w-64  ">We have spent +30 years creating and re-creating digital solutions, and learned what makes great businesses stay in business. </p>
            </div>       
    </section>

    <section class="mb-10 mt-10">
        <div class=" inline-flex w-full ">
            <p class=" border-r-2 p-2  border-b-2 w-1/6 items-center pl-11 h-24 font-bold text-2xl">viacom </p>
            <p class=" border-r-2 p-2  border-b-2 w-1/6 items-center pl-11 h-24 font-bold text-2xl">AVON </p>
            <p class=" border-r-2 p-2  border-b-2 w-1/6 items-center pl-11 h-24 font-bold text-2xl ">mercado <span class=" block ml-6">libre</span> </p>
            <p class=" border-r-2 p-2  border-b-2 w-1/6 items-center pl-11 h-24 font-bold  text-2xl">VISA </p>
            <p class=" border-r-2 p-2  border-b-2 w-1/6 items-center pl-11 h-24 font-bold text-2xl">IBM </p>
            <p class=" border-r-2 p-2  border-b-2 w-1/6 items-center pl-11 h-24 font-bold text-2xl ">A&E </p>
            <p class=" border-r-2 p-2  border-b-2 w-1/6 items-center pl-11 h-24 font-bold text-2xl">ICBC </p>
            
        </div>
        <div class="flex justify-between items-center mt-20 mb-2">
            <p class=" ml-28 font-semibold text-sm">Within these 7 industries  </p>
            
        </div>
        <div class=" grid grid-cols-11  mt-20 mb-2">
            <div class="col-span-3">
                <p class=" ml-28 font-semibold ">HealthCare </p>
            </div>
            <div class="col-start-6 col-span-6 text-xs mr-48">
                <p>We strive to revolutionize the healthcare sector by leveraging cutting-edge technologies, empowering medical professionals, and enhancing patient experiences in unprecedented ways. Our mission is to redefine the boundaries of healthcare innovation, crafting transformative digital solutions that revolutionize the concept of wellness, improve medical outcomes, and optimize the utilization of leisure time for a healthier society.</p>     
                 <div  class="mt-10  w-[300px]  inline-flex   mb-10">                
                <p class="rounded-full p-1 bg-gray-900 text-gray-100  text-xs px-2 ">Find out More</p>   
                <img src="../new_incons/svgexport-23.png" alt="" class=" w-7 rounded-full bg-gray-900 text-white px-2 p-2">    
            </div>
            </div>            
        </div>
        <div class=" grid grid-cols-11  mt-20 mb-2">
            <div class="col-span-3">
                <p class=" ml-28 font-semibold">Automotive </p>
            </div>
            <div class="col-start-6 col-span-6 text-xs mr-48">
                <p>Consumers crave automotive innovation like never before, seeking seamless driving experiences, advanced connectivity, and enhanced safety features. They desire vehicles that effortlessly adapt to their individual preferences, all while maintaining impeccable quality. At our core, we empower automotive companies to transform themselves, ensuring they remain at the forefront of this rapidly evolving industry.</p>     
                 <div  class="mt-10  w-[300px]  inline-flex   mb-10">                
                <p class="rounded-full p-1 bg-gray-900 text-gray-100  text-xs px-2 ">Find out More</p>   
                <img src="../new_incons/svgexport-23.png" alt="" class=" w-7 rounded-full bg-gray-900 text-white px-2 p-2">    
            </div>
            </div>            
        </div>
        <div class=" grid grid-cols-11  mt-20 mb-2">
            <div class="col-span-3">
                <p class=" ml-28 font-semibold">Telecommunication </p>
            </div>
            <div class="col-start-6 col-span-6 text-xs mr-48">
                <p>As the digital revolution sweeps through our interconnected world, the telecommunications industry plays a pivotal role in shaping our everyday conversations. With an insatiable demand for seamless connectivity and cutting-edge services, individuals and businesses alike expect nothing short of excellence from telecom brands, and we are dedicated to exceeding their expectations. From lightning-fast networks to innovative communication solutions, we ensure that our industry leads the way in delivering the very best experiences to empower and connect people around the globe.</p>     
                 <div  class="mt-10  w-[300px]  inline-flex mb-10">                
                <p class="rounded-full p-1 bg-gray-900 text-gray-100  text-xs px-2 ">Find out More</p>   
                <img src="../new_incons/svgexport-23.png" alt="" class=" w-7 rounded-full bg-gray-900 text-white px-2 p-2">    
            </div>
            </div>            
        </div>
        <div class=" grid grid-cols-11  mt-20 mb-2">
            <div class="col-span-3">
                <p class=" ml-28 font-semibold">Retail & Ecommerce </p>
            </div>
            <div class="col-start-6 col-span-6 text-xs mr-48">
                   <p>The art of crafting immersive customer journeys is a vital strength that we leverage in the retail and ecommerce industry, empowering organizations to redefine their offerings in a digitally-driven landscape. By seamlessly blending online and offline experiences, we enable retailers to revolutionize their portfolio and thrive in the ever-evolving realm of commerce.</p>      
                 <div  class="mt-10  w-[300px]  inline-flex mb-10">                
                <p class="rounded-full p-1 bg-gray-900 text-gray-100  text-xs px-2 ">Find out More</p>   
                <img src="../new_incons/svgexport-23.png" alt="" class=" w-7 rounded-full bg-gray-900 text-white px-2 p-2">    
            </div>
            </div>            
        </div>
        <div class=" grid grid-cols-11  mt-20 mb-2 ">
            <div class="col-span-3">
                <p class=" ml-28 font-semibold">Finance & Insurance </p>
            </div>
            <div class="col-start-6 col-span-6  text-xs mr-48 "> 
                <p>In the finance and insurance industry, we empower organizations to transform their practices, revolutionizing how financial services are delivered and safeguarding assets through innovative strategies. Our expertise lies in redefining operational frameworks, optimizing risk management protocols, and streamlining transactional processes to ensure efficiency and enhance customer satisfaction amidst evolving market demands. We are committed to reshaping the landscape of financial and insurance sectors, enabling institutions to adapt, thrive, and meet the ever-changing needs of their clients with confidence and agility.</p>      
                 <div  class="mt-10  w-[300px]  inline-flex mb-10">                
                <p class="rounded-full p-1 bg-gray-900 text-gray-100  text-xs px-2 ">Find out More</p>   
                <img src="../new_incons/svgexport-23.png" alt="" class=" w-7 rounded-full bg-gray-900 text-white px-2 p-2">    
            </div>
            </div>            
        </div>
        <div class=" grid grid-cols-11  mt-20 mb-2">
            <div class="col-span-3">
                <p class=" ml-28 font-semibold">Logistics </p>
            </div>
            <div class="col-start-6 col-span-6 text-xs mr-48">
                <p>Logistics has become an essential pillar for seamless supply chain management and efficient operations in today's global marketplace. From transportation to warehousing, technology-driven solutions have become the backbone of this industry. We understand the intricacies of logistics and leverage our extensive experience to optimize processes, streamline operations, and deliver exceptional results in an ever-evolving landscape. Our expertise enables us to navigate complex logistical challenges, ensuring timely and cost-effective delivery of goods, and empowering businesses to stay ahead in the competitive logistics sector.</p>     
                 <div  class="mt-10  w-[300px]  inline-flex mb-10">                
                <p class="rounded-full p-1 bg-gray-900 text-gray-100  text-xs px-2 ">Find out More</p>   
                <img src="../new_incons/svgexport-23.png" alt="" class=" w-7 rounded-full bg-gray-900 text-white px-2 p-2">    
            </div>
            </div>            
        </div>
        <div class=" grid grid-cols-11  mt-20 mb-2">
            <div class="col-span-3">
                <p class=" ml-28 font-semibold">Utilities </p>
            </div>
            <div class="col-start-6 col-span-6 text-xs mr-48">
                <p>In an ever-evolving Utilities industry, where infrastructure demands continue to grow, environmental concerns become more pressing, and customer expectations reach new heights, we empower organizations with cutting-edge solutions, holistic approaches, and adaptive frameworks to transform complex data into actionable intelligence. As grid systems become smarter, renewable energy gains momentum, and regulatory landscapes evolve, our unwavering commitment to innovation ensures that we unlock the full potential of data-driven decision-making, delivering unparalleled value and efficiency to our clients.</p>     
                 <div  class="mt-10  w-[300px]  inline-flex mb-10">                
                <p class="rounded-full p-1 bg-gray-900 text-gray-100  text-xs px-2 ">Find out More</p>   
                <img src="../new_incons/svgexport-23.png" alt="" class=" w-7 rounded-full bg-gray-900 text-white px-2 p-2">    
            </div>
            </div>            
        </div>
    </section>
</main>


    <div v-else class="mt-10 mr-4 ml-4 py-3 px-3 ">
        <p  class=' font-medium text-xl'>
                Industries we know
        </p>
        <p class='font-medium text-xl'>
            and understand
        </p>
        <div class=" text-7xl mt-10 font-bold">
            <p>un <span class="block">paralleled</span></p>
        </div>
        <div class="flex justify-between  ">
            <img src="../new_incons/svgexport-20.png" alt="" class="rounded-full  mt-96  rotate-90 w-52   bottom-0 p-5 " style="background:#ffff05;"/>
            <img src="../icons/pocketad.io_home_image2_mobile.png" alt="no img" class="  w-72 bg ">
        </div>
        <div class="mt-10 flex  ">
            <img src="../new_incons/svgexport-21.png" alt="" class="h-11 mt-5"  >
            <p class=" text-3xl pl-5 font-semibold">we know what <span class="block">we're doing</span> 
            </p>
        </div>  
        <div class="mr-2 ml-2 mt-10 ">
            <p class=" text-slate-500 ">We have spent +30 years creating and re-creating digital solutions, and learned what makes great businesses stay in business.</p>
        </div> 
        <div class="mt-28  flex justify-between">
            <p class=" font-bold text-3xl">Naranja X </p>
            <p class=" font-bold text-3xl">YPF </p>
        </div> 
        <div class=" ml-2 mt-28 ">
            <p class=" text-lg">Within these 7 industries</p>
            <div class="border-slate-300 border-x-4 border-b-2 mt-5 mb-8 sm:h-full ">
                <div class="slider">
                    <div class='slider-content' :style="sliderStyle">
                        <div class="slider-item"
                            v-for="(item, index) in items" :key="index"
                            :class="{ active: currentIndex === index }"
                        >
                            <p class="mt-10 text-3xl font-semibold px-2  ">{{item.title}}</p>
                            <p class="mt-5 px-2    ">{{item.description}}</p>
                            <div  class="w-[300px]  inline-flex  mt-5  mb-5 px-2 py-2  ">                
                              <p class="rounded-full py-3 px-5 text-center  text-gray-900 text-xs font-medium  " style="background:#ffff05;">Find out more</p>     
                              <img src="../new_incons/svgexport-20.png" alt="" class="rounded-full  p-3 w-10" style="background:#ffff05;">    
                          </div>
                        </div>
                    </div>
                    
                
                <div class="flex   place-content-center  mb-10">   
                        <button class='rounded-full  bg-black  h-10  w-10  ml-5   hover:bg-slate-500    ' @click="slideLeft">
                            <img src="../new_incons/svgexport-31.png" alt="" class=" mt-4 ml-3 w-4 mb-4  rotate-180" />
                        </button>
                    <p class=" text-slate-500 text-lg ml-4 mt-3">{{currentIndex+1}}/7</p>
                        <button class='rounded-full bg-black  h-10  w-10  ml-5  hover:bg-slate-500  ' @click="slideRight">
                            <img src="../new_incons/svgexport-31.png" alt="" class=" mt-4 ml-3 w-4 mb-4  " />
                        </button>
                </div>
            </div>
                    
            </div>
              
        </div>
    </div>
    
</template>
<script >
export default {
  data() {
    return {
      currentIndex: 0,
      items: [
        {
          title: "HealthCare",
          description: "We strive to revolutionize the healthcare sector by leveraging cutting-edge technologies, empowering medical professionals, and enhancing patient experiences in unprecedented ways. Our mission is to redefine the boundaries of healthcare innovation, crafting transformative digital solutions that revolutionize the concept of wellness, improve medical outcomes, and optimize the utilization of leisure time for a healthier society.",
        },
        {
          title: "Automotive",
          description: "Consumers crave automotive innovation like never before, seeking seamless driving experiences, advanced connectivity, and enhanced safety features. They desire vehicles that effortlessly adapt to their individual preferences, all while maintaining impeccable quality. At our core, we empower automotive companies to transform themselves, ensuring they remain at the forefront of this rapidly evolving industry.",
        },
        {
          title: "Telecommunication",
          description: "As the digital revolution sweeps through our interconnected world, the telecommunications industry plays a pivotal role in shaping our everyday conversations. With an insatiable demand for seamless connectivity and cutting-edge services, individuals and businesses alike expect nothing short of excellence from telecom brands, and we are dedicated to exceeding their expectations. From lightning-fast networks to innovative communication solutions, we ensure that our industry leads the way in delivering the very best experiences to empower and connect people around the globe.",
        },
        {
          title:"Retail & Ecommerce",
          description:"The art of crafting immersive customer journeys is a vital strength that we leverage in the retail and ecommerce industry, empowering organizations to redefine their offerings in a digitally-driven landscape. By seamlessly blending online and offline experiences, we enable retailers to revolutionize their portfolio and thrive in the ever-evolving realm of commerce."
        },
        {
          title:"Finance & Insurance",
          description:"In the finance and insurance industry, we empower organizations to transform their practices, revolutionizing how financial services are delivered and safeguarding assets through innovative strategies. Our expertise lies in redefining operational frameworks, optimizing risk management protocols, and streamlining transactional processes to ensure efficiency and enhance customer satisfaction amidst evolving market demands. We are committed to reshaping the landscape of financial and insurance sectors, enabling institutions to adapt, thrive, and meet the ever-changing needs of their clients with confidence and agility."
        },
        {
          title:"Logistics",
          description:"Logistics has become an essential pillar for seamless supply chain management and efficient operations in today's global marketplace. From transportation to warehousing, technology-driven solutions have become the backbone of this industry. We understand the intricacies of logistics and leverage our extensive experience to optimize processes, streamline operations, and deliver exceptional results in an ever-evolving landscape. Our expertise enables us to navigate complex logistical challenges, ensuring timely and cost-effective delivery of goods, and empowering businesses to stay ahead in the competitive logistics sector."
        },
        {
          title:"Utilities",
          description:"In an ever-evolving Utilities industry, where infrastructure demands continue to grow, environmental concerns become more pressing, and customer expectations reach new heights, we empower organizations with cutting-edge solutions, holistic approaches, and adaptive frameworks to transform complex data into actionable intelligence. As grid systems become smarter, renewable energy gains momentum, and regulatory landscapes evolve, our unwavering commitment to innovation ensures that we unlock the full potential of data-driven decision-making, delivering unparalleled value and efficiency to our clients."
        },
      ],
    };
  },
  computed: {
    sliderStyle() {
      return `transform: translateX(-${this.currentIndex * 100}%)`;
    },
  },
  methods: {
    slideLeft() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    slideRight() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
  },
};
</script>

<style>
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-content {
  display: flex;
  transition: transform 0.3s ease;
}

.slider-item {
  flex: 0 0 100%;
}

.slider-button {
  position: absolute;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;  
  cursor: pointer;
}


</style>
