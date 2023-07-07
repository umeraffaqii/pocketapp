
<script setup>
const isDesktop = typeof window !== "undefined" && window.innerWidth > 770;
</script>


<template>
    <main v-if="isDesktop" class="pl-20 pr-20 h-full mb-0  mt-20" >
    <h1 class="font-bold text-[40px] ml-10 ">Technology leaders through <span class="block"> cutting-edge solutions.</span>  
    </h1>
    <p class=" mt-16 text-[14px] ml-10 mb-3">30+ years empowering business.</p>
    
    <div class="flex justify-between items-center  h-60 mx-auto  p-0 mb-16  ">
        <p class="  mt-32  mb-5 bg-black w-[20px] rounded-full h-[70px] p-0 ">
        
        <span class="text-white rotate-90 ">
            <img src="../new_incons/svgexport-18.png" class="ml-1 mt-2 p-0  h-12"  alt="no img"> 
            </span>
           
        </p>             
    </div>
    <article class="flex justify  space-x-28">    
            <p class=" text-sm w-40 ml-10">How we think</p>  
                    
        <div class=" w-3/4"  >
            <p class="font-bold text-3xl mb-16 ml-20">We're challengers at the heart  </p>
            <p class="text-2xl text-gray-400 mt-5 ml-20">PocketAd is a collective brain,formed by a diverse group of people who bring years of experience, dedication and everlasting devotion to digital craftsmanship. 
            </p>
            
             <div  class="w-[300px]  inline-flex  mt-10  mb-24  ml-20 ">                
                <p class="rounded-full p-2 px-2  text-gray-900 text-xs font-extrabold  " style="background:#ffff05;">Dive into our culture</p>     
                <img src="../new_incons/svgexport-20.png" alt="" class="rounded-full  p-3 w-10" style="background:#ffff05;">    
            </div>
        </div>
            <img src="../new_incons/svgexport-21.png" alt="" class="object-cover pl-40  w-50 h-10 text-gray-600">    
        </article>
</main>  
        <main  v-else class="ml-5 mr-5 h-full">
        <div class=" text-4xl font-bold  mt-14 mb-10 ">
            Technology leaders through cutting-edge solutions.
        </div>
        <p class=" mb-20">30+ years empowering business</p>

        <div class="flex justify-between items-center  h-60 mx-auto  p-0 mb-8  ">
            <p class="  mt-32  mb-5 bg-black  rounded-full h-[120px] px-2  ">
                <span class="text-white rotate-90 ">
                    <img src="../new_incons/svgexport-18.png" class=" mt-10 "  alt="no img"> 
                </span>
            </p>             
        </div>
        <div class="flex  justify-between mt-14" >
            <p class=" text-2xl  ">How we think</p>
            <img src="../new_incons/svgexport-21.png" alt="no img" class="h-14 mt-3">
        </div>
        <div class=" mt-5">
            <p class="  text-[40px] font-bold ">
                We're challengers at heart
            </p>
            <p class=" mt-14 mb-16 text-slate-500  font-bold text-2xl">
                PocketAd is a <span class='block'>collective brain, formed by a diverse group of people who bring years of experience, dedication and everlasting devotion to 
                digital craftsmanship.
                </span>
            </p>
        </div>
        <div  class="  inline-flex  mt-10  mb-24   ">                
                <p class="rounded-full py-3 px-5 text-center  text-gray-900 text-xs font-extrabold  " style="background:#ffff05;">Dive into our culture</p>     
                <img src="../new_incons/svgexport-20.png" alt="" class="rounded-full  py-3 px-3 " style="background:#ffff05;">    
        </div>
        <img src="../icons/pocketad.io_stoneMoble.version.png" class="h-full w-full absolute  mix-blend-overlay  "/>
        <div class=" h-full  " >

            <p class=" text-xl mb-2  h-28 pt-20 ml-8 text-black font-medium  "> Fields of expertise</p>
            <p class=" text-7xl pl-3 mt-10 text-white font-bold">Innovation </p>
            <div class="mt-5 flex justify-between ml-14 mr-14 mb-2 ">
                <img src="../new_incons/svgexport-22.png" alt="no img found" class=" h-16">
                <p class=" text-7xl font-bold ">driven</p>
            </div>
            <p class=" text-7xl font-bold ml-14 mr-14">
                design
            </p>
            
            <p class="mt-10 text-[18px] ml-14 mr-16 ">
                Services that matter are foreseen, bespoke and pertinent to people. 
            </p>
            <p class="mt-10 text-[18px] ml-14 mr-16 ">
                They aren't produced by coincidence, nor are the offspring of ingenuity. Solutions that matter are the culmination of a refined  process of conception, maturation and execution. 
            </p>

            <div  class=" inline-flex  mt-10  mb-10  ml-14 mr-16  ">                
                <p class="rounded-full py-3 px-5 text-center  bg-black  text-xs font-medium  " >What we do </p>     
                <img src="../new_incons/svgexport-31.png" alt="" class="rounded-full bg-black p-3 w-10" >    
            </div>
            <div class="mr-4 ml-4 mt-10 border-slate-50  border-2 py-3 px-3">
                <p class=" text-3xl font-bold mb-40">Branding & Strategy</p>
                <img src="../new_incons/svgexport-20.png" alt="" class="mt-16 rounded-full   bg-slate-300 p-3 w-10" > 
                <p class="mt-3 ">We devise the optimal processes and techniques to augment innovation labs and digital product revelations.</p>
            </div>
            <div class="mr-4 ml-4 border-slate-50   border-2 py-3 px-3">
                <p class=" text-3xl font-bold mb-36">Traffic Generation</p>
                <img src="../new_incons/svgexport-20.png" alt="" class="mt-16 rounded-full   bg-slate-300 p-3 w-10" > 
                <p class="mt-3 ">We have expanded our services to include comprehensive traffic generation strategies designed to skyrocket your digital presence and attract high-quality leads.</p>
            </div>
            <div class="mr-4 ml-4 border-slate-50   border-2 py-3 px-3">
                <p class=" text-3xl font-bold  mb-36">Engagement</p>
                <img src="../new_incons/svgexport-20.png" alt="" class="mt-16 rounded-full  bg-slate-300 p-3 w-10" > 
                <p class="mt-3">We firmly believe that engagement is the key to unlocking the full potential of innovation labs and digital product discoveries.</p>
            </div>
            <div class="mr-4 ml-4 border-slate-50   border-2 py-3 px-3">
                <p class=" text-3xl font-bold  mb-36">Video Views</p>
                <img src="../new_incons/svgexport-20.png" alt="" class="mt-16 rounded-full  bg-slate-300 p-3 w-10" > 
                <p class="mt-3 ">We understand the significance of video views in driving brand recognition, expanding reach, and fostering meaningful connections with your target market.</p>
            </div>
            <div class="mr-4 ml-4 border-slate-50   border-2 py-3 px-3">
                <p class=" text-3xl font-bold  mb-36">Lead Generation</p>
                <img src="../new_incons/svgexport-20.png" alt="" class="mt-16 rounded-full  bg-slate-300 p-3 w-10" > 
                <p class="mt-3 ">We have honed our expertise in developing strategic processes and methodologies specifically designed to supercharge your lead generation efforts.</p>
            </div>

        </div>
    </main>
   
</template>
<script >
</script>