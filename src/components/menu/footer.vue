<script setup>
const isDesktop = typeof window !== "undefined" && window.innerWidth > 770;
</script>

<template>
<RouterView>
    <footer v-if="isDesktop" class=" relative  w-full h-full ">

<img src="../icons/PocketAd.io_Gradient_Footer.png" alt="no img"  class="w-full h-full absolute object-cover mix-blend-overlay " >

<section class="pl-20 pr-20 ">

   <article class="flex justify-between  w-full  pt-20  pb-10">
       <div  class="   text-white  ">
           <p class=" text-xs" >Keep in touch  </p>

           <div  class="pt-5">
               <p class="mt-5 text-white font-bold text-[36px]  w-[450px] tracking-wider ">Let's Start <span class="block">creating together</span> </p>
           </div>
               <div  class=" inline-flex  mb-24 mt-5">                
                   <p class=" rounded-full p-2  bg-gray-100 text-gray-800 text-xs px-4 font-bold">Drop us a line</p>     
                   <img src="../new_incons/svgexport-11.png" alt="" class="rounded-full bg-gray-100 h-9 px-2 py-2 mt-1  ml-1">    
               </div>
       </div>
       <div> 
           <img src="../new_incons/linkedin-white.png" class="object-cover  w-8 text-white block pb-4">
           <img src="../new_incons/behance-white.png" class="object-cover   w-8 text-white block pb-4" >
           <img src="../new_incons/Instagram-white.png" class="object-cover w-8 text-white block pb-4">
           <img src="../new_incons/facebook-white.png" class="object-cover w-8 text-white block  pb-4">
           <img src="../new_incons/twitter-white.png" class="object-cover  w-8 text-white block  pb-4">
       </div>
   </article>
   <div class=" ml-10  bg-gradient-to-br from-inherit  ">
   
  
   <article class="flex">

           
       <div class=" shrink  w-52 border-gray-500  text-white text-[26px]  font-semibold relative border-r-[1px] border-b-[1px]">
           <span class="absolute  left-0 h-20 text-center mt-24  ">Pocket Ad</span>               
       </div>
       
       <div class=" pl-4  shrink w-36 z-10 border-gray-500 left-0 text-gray-900 border-r-[1px] border-b-[1px]" >
           <ul class="  text-[14px]  font-semibold  ">
               <li class="font-bold ">Main</li> 
               <li class=" mt-16 text-[10px]">Home</li>
               <li class=" mt-1 text-[10px] ">Services</li>
               <li class="mt-1 text-[8px]">Contact</li>
               <li class="mt-1 text-[10px] pb-10">Team</li>
           </ul>
       </div>
       <div class="pl-4 shrink w-36 z-10  border-gray-500 left-0 text-gray-900 border-r-[1px] border-b-[1px]">
           <ul class="text-[14px]  font-semibold">
           <li class="font-bold ">Services</li> 
           <li class=" mt-12 text-[10px]">Branding & Strategy</li>
           <li class=" mt-1 text-[10px] ">Traffic Generation </li>
           <li class="mt-1 text-[10px]">Video Views</li>
           <li class="mt-1 text-[10px]">Lead Generation</li>
           <li class="mt-1 text-[10px]">Conversion & Sales</li>
       </ul>
        </div>
       <div class="pl-4 shrink w-36 z-10   border-gray-500 left-0 text-gray-900 border-r-[1px] border-b-[1px]">
           <ul class="text-[14px]  font-semibold">
               <li class="font-bold ">Industries</li> 
               <li class=" mt-6 text-[10px]">Entertainment</li>
               <li class=" mt-1 text-[10px] ">Media & OTT </li>
               <li class="mt-1 text-[10px]">Banking,Finance & Crypto</li>
               <li class="mt-1 text-[10px]">Insurance & insutech</li>
               <li class="mt-1 text-[10px]">Energy & Industries</li>
               <li class="mt-1 text-[10px]">Retail & Commerce</li>
               <li class="mt-1 text-[10px]">Information Technology</li>
           </ul>
       </div>
       <div class="pl-4 shrink w-52 z-10 border-gray-500 left-0 text-gray-900  border-b-[1px]">
           <ul class="text-[14px] pl-4 font-semibold ">
               <li class="font-bold ">Contacts</li> 
               <li class=" mt-24 text-[10px]">hello@Pocketad.io</li>
               <li class="mt-1 text-[10px]">United States/United Kingdom</li>
           </ul>
       </div>
       
       
       <div class=" border-gray-500 text-gray-900 text-[14px] pl-4 font-semibold relative ">
       <!-- <icon class="object-cover  w-5 text-white block "/>                 -->
       <img src="../new_incons/svgexport-11.png" class="object-cover w-full h-12 pl-28 pr-20    ">
       </div>
       
   </article>

       <ul class="flex items-center  mt-3 ">

           <li> <button class="rounded-full  font-bold text-[10px]  py-1 outline outline-1  inline-flex px-2">
           ENG <img src="../new_incons/down-arrow-svgrepo-com.png" width="10" class="mt-1  ml-10 " >
           </button></li>
           <li class=" text-[10px] pl-10 "> term & condition</li>
           <li class=" text-[10px] pl-3 "> privacy</li>
           <li class=" text-[10px] pl-3 mr-52"> Cookies Policy</li>
           <li class=" text-[10px]  ml-96 "> 2023 - All rights reserved</li>
       </ul>
  </div>       
</section>

</footer>
<footer v-else class=" relative ">
     <img src="../icons/pocketadFooterMobileVersion.png " alt="" class="  w-full absolute mix-blend-overlay sm:mix-blend-overlay  " >
    <section class="pl-5 pr-5 ">

        <article class="flex justify-between  pt-20  pb-10">
            <div  class="   text-white  ">
                <p class=" text-[22px] mb-5 ml-4" >Keep in touch  </p>

                <div  class="pt-5">
                    <p class="mt-5 text-white font-bold text-[36px] tracking-wider w-52 leading-9 mb-5 pl-4">Let's Start creating together </p>
                </div>
                    <div  class=" inline-flex  pl-4 mb-5 mt-10">                
                        <p class=" rounded-full px-4 pt-3 bg-gray-100 text-gray-800   text-sm font-bold ">Drop us a line</p>     
                        <img src="../new_incons/svgexport-11.png" alt="" class=" z-10 rounded-full bg-gray-100 h-10  px-2 py-2 mt-1  ml-1">    
                    </div>
            </div>
        </article>
        <div class=" flex pl-1  "> 
                <img src="../new_incons/linkedin-white.png" class=" h-8  mr-1  ">
                <img src="../new_incons/behance-white.png" class="  h-8  mr-1     " >
                <img src="../new_incons/Instagram-white.png" class=" h-8 mr-1    ">
                <img src="../new_incons/facebook-white.png" class=" h-8  mr-1   ">
                <img src="../new_incons/twitter-white.png" class="  h-8 mr-1    ">
        </div>
        <div class="flex justify-between mt-10">
            <p class=" text-4xl text-white pl-4 ">PocketAd</p>
            <img src="../new_incons/svgexport-21.png" class="object-cover h-11 mr-2   ">
        </div>
        <div class="mt-5">
            <ul class="flex items-center  mt-3 pb-10">

                <div class="mr-5 mb-32 pl-5">
                    <li class=" outline outline-1 rounded-full "> 
                    <p class="  font-bold text-[16px]  py-1 flex justify-center  px-5 ">
                        ENG
                         <img src="../new_incons/down-arrow-svgrepo-com.png"  class="mt-2 ml-4 h-2  inline-flex rotate-180 " >
                    </p>
                </li>
                </div>
                <div class="mt-5 mr-24 ml-7 ">
                    <li class=" text-[14px] pl-3 pb-2 "> Term & Condition</li>
                    <li class=" text-[14px] pl-3  pb-2"> Privacy</li>
                    <li class=" text-[14px] pl-3 mb-2"> Cookies Policy</li>
                    <li class=" text-[14px] pl-3 ml-9 w-40 text-slate-800 mt-10  "> 2007-2023 - All rights reserved</li>
                </div>
            </ul>
        </div>
        
              
    </section>
    
</footer>
</RouterView>
</template>

