
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

    <main  v-else class="ml-8 mr-8 h-full">
        <div class=" text-4xl font-bold  mt-14 mb-5 ">
            Technology leaders through cutting-edge solutions.
        </div>
        <p class=" mb-20">30+ years empowering business</p>

        <div class="flex justify-between items-center  h-60 mx-auto  p-0 mb-8  ">
            <p class="  mt-32  mb-5 bg-black w-[20px] rounded-full h-[70px] p-0 ">
                <span class="text-white rotate-90 ">
                    <img src="../new_incons/svgexport-18.png" class="ml-1 mt-2 p-0  h-12"  alt="no img"> 
                </span>
            </p>             
        </div>
        <div class="flex  justify-between" >
            <p class="text-xs">How we think</p>
            <img src="../new_incons/svgexport-21.png" alt="no img" class="h-10 mt-3">
        </div>
        <div class=" mt-5">
            <p class=" text-4xl font-bold ml-5 mr-5">
                We're challlengers at heart
            </p>
            <p class="ml-5 mr-5 mt-14 text-slate-400  font-bold text-lg">
                PocketAd is a collective brain,
                formed by a diverse group of
                people who bring years of
                experience, dedication and
                everlasting devotion to 
                digital craftsmanship.
            </p>
        </div>
        <div  class="w-[300px]  inline-flex  mt-10  mb-24   ">                
                <p class="rounded-full py-2 px-5 text-center  text-gray-900 text-xs font-extrabold  " style="background:#ffff05;">Dive into our culture</p>     
                <img src="../new_incons/svgexport-20.png" alt="" class="rounded-full  p-3 w-10" style="background:#ffff05;">    
        </div>
    </main>
</template>
<script setup>
</script>