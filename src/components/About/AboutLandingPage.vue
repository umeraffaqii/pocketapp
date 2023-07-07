<script setup>
const isDesktop = typeof window !== "undefined" && window.innerWidth > 770;
</script>

<template>
    <main v-if="isDesktop" class="w-full pl-20 pr-20 bg-gray-100">
    <p class="text-xs pt-2 pb-2">About Us</p>
    <h1 class="text-[40px] font-bold w-[660px]  pt-3 pb-3">We engage disruptive innovation in the space where business goals meet customer delight.</h1>
    <div class="flex justify-between items-center mb-5">
        <p class=" mt-10  mb-5 bg-black w-[25px] rounded-full h-[80px] p-0 "> 
        <span class="text-white rotate-90 ">
            <img src="../new_incons/svgexport-18.png" class="ml-1 mt-2 p-0"  alt="no img"> 
        </span>   
        </p> 
            <div >
                <img src="../icons/pocketad.io_about_image1.jpg" 
                class="rounded-full  object-center h-72 " width="600"  alt="">
            </div>
    </div>
        <article class="flex justify  space-x-20 mt-16">
                <p  class="relative">about @ pocketad <span class="text-[8px] pl-1 absolute font-bold ">TM</span></p>  
                <div class="w-[430px]  mb-32" >
                    <p class="text-sm font-semibold ">PocketAd is a digital media agency that operates on a global scale, founded in 2023, with our headquarters located in the United States. <span class="block mt-3">With a combined extensive tenure of over three decades in digital marketing, we specialize in SEA and programmatic media, showcasing our expertise through the provision of customized solutions that cater to the unique requirements of each of our clients. Our sole aim is to maximize their online digital strategies and heighten their online presence.</span> <span class="block mt-3">Furthermore, PocketAd functions as a valuable user insight and business intelligence provider, procuring and analyzing third-party user data from various sources scattered throughout the internet. We uphold a steadfast commitment to maintaining the highest standards of quality and offer a diverse array of sophisticated tools and solutions to enable our clients to transmute their premium data into revenue.</span>  
                    </p>
                
            </div>
                
        </article>
    </main>    

    <main v-else class=" bg-gray-100  h-full">
        <div  >
          
            <p class="ml-2 pt-2 pb-2  font-medium">About Us</p>
            <h1 class='mt-10  text-[74px] font-bold mb-10  leading-[4rem] '>building <span class='flex ' >
                <img src="../new_incons/horizontal-line-svgrepo-com.png" alt="" class='w-28 text-center h-24 '>  togethe</span> </h1>
            <p class="text-[28px] ml-2 font-bold mr-10 text-gray-500 mb-20">
                We engage disruptive  <span class='block '>innovation  in the space where business goals meet customer delight.</span>
            </p>
            <p class='mt-60 ml-5 mr-5 text-lg text-gray-600 font-medium'><span  class='block mt-5'>PocketAd is a digital media agency that operates on a global scale, founded in 2023, with our headquarters located in the United States.</span> <span class='block mt-5 '> With a combined extensive tenure of over three decades in digital marketing, we specialize in SEA and programmatic media, showcasing our expertise through the provision of customized solutions that cater to the unique requirements of each of our clients.</span> <span class='block mt-5'>Furthermore, PocketAd functions as a valuable user insight and business intelligence provider, procuring and analyzing third-party user data from various sources scattered throughout the internet. We uphold a steadfast commitment to maintaining the highest standards of quality and offer a diverse array of sophisticated tools and solutions to enable our clients to transmute their premium data into revenue.</span> </p>

            <div>
                <div class='pb-20 '>
                    <img src="../icons/p.io_about_image1.jpg" class="half-image  rounded-s-full max-w-sm ml-16   w-80 mt-10 ">
                </div>
            </div>
        </div>    
    </main>    
</template>

