<script setup>
const isDesktop = typeof window !== "undefined" && window.innerWidth > 770;
</script>

<template>

<main v-if="isDesktop" class=" h-[1050px]" style="background:#2a2a2a;">

<div class="pl-10 pr-10  pt-80 mx-auto  ">
<section  class=" text-white ">
    <div class=" grid grid-cols-5 w-screen  md:w-auto  ">
            <p class="col-span-1 w-full text-center border-gray-500 border-l-2 border-r-2 p-2  border-b-2  pt-20 h-48 "><span class="text-yellow-400 text-lg">+</span> <span class=" text-6xl pt-4">15</span> <span class=" text-xs block">Experts</span> </p>
            <p class="col-span-1 w-full text-center border-gray-500 border-l-2 border-r-2 p-2  border-b-2  pt-20 h-48 "><span class="text-yellow-400 text-lg">+</span> <span class=" text-6xl pt-4">50</span> <span class=" text-xs block">Projects</span> </p>
            <p class="col-span-1 w-full text-center border-gray-500 border-l-2 border-r-2 p-2  border-b-2  pt-20 h-48 "><span class="text-yellow-400 text-lg">+</span> <span class=" text-6xl pt-4">16</span> <span class=" text-xs block">Years in Business</span> </p>
            <p class="col-span-1 w-full text-center border-gray-500 border-l-2 border-r-2 p-2  border-b-2  pt-20 h-48 "><span class="text-yellow-400 text-lg">+</span> <span class=" text-6xl pt-4">8</span> <span class=" text-xs block">Awards</span> </p>
            <p class="col-span-1 w-full text-center border-gray-500 border-l-2 border-r-2 p-2  border-b-2  pt-20 h-48 "><span class="text-yellow-400 text-lg">+</span> <span class=" text-6xl pt-4">2</span> <span class=" text-xs block">Others</span> </p>          
        </div>    
    </section>
</div>
<div class="grid grid-cols-11 h-96 text-white mt-10" >
<div class="col-span-3 ">
    <p class=" text-xs ml-28">How we think</p>

</div>
<div class="col-span-6 ml-16">
    <p class=" text-3xl font-bold ">
        We use data to challenge
        <span class="block">the world around us.</span>
    </p>
    <p class=" text-gray-500 text-2xl font-bold">
        Our methodology goes beyond mere data analysis and visualization; we delve deep into the intricacies of your data ecosystem to unearth the hidden insights that drive value for your organization. By unraveling the complexities of your data infrastructure, we empower your business to harness the untapped potential and unlock meaningful outcomes for your stakeholders.
    </p>
    <div  class="w-[300px]  inline-flex  mt-10  ">                
            <p class="rounded-full p-2 px-2  text-gray-900 text-xs font-extrabold  " style="background:#ffff05;">Dive into our culture</p>     
            <img src="../new_incons/svgexport-20.png" alt="" class="rounded-full  p-3 w-10" style="background:#ffff05;">    
    </div>
</div>
<div class="col-span-1 ">
    <img src="../new_incons/svgexport-22.png"  class=" ml-14  w-10">
</div>
</div> 
</main>


    <div v-else class=" text-white mt-10 h-full " style="background:#2a2a2a;" >
        <div class="grid grid-cols-2 mb-10 ml-2 mr-2 h-52 ">
            <div class=" col-span-1 border-slate-600 border-b-2  border-l-2 pl-20 mt-10  ">
                <p class="  "> <span style="color:#ffff05;" class="text-[10px] mt-8" >+</span > 
                    <span class=" text-4xl font-semibold"> 15</span> 
                </p>
                <p class=" text-xs ml-5">Experts</p>
            </div>
            <div class=" col-span-1 border-slate-600 border-b-2 border-x-2 pl-20 mt-10  ">
                <p class="  "> <span style="color:#ffff05;" class="text-[10px] mt-8" >+</span > 
                    <span class=" text-4xl font-semibold"> 50</span> 
                </p>
                <p class=" text-xs ml-5">Projects</p>
            </div>
        </div>
        <div class='ml-2 '>
            <div class="flex justify-between ml-2 mr-2 mb-6">
                <p class=" text-xl ">How we think</p>
                <img src="../new_incons/svgexport-22.png" alt="" class="w-14">
            </div>
        <div class="ml-2 mr-2"> 
            <p class=" text-2xl font-bold">We use Design to challenge the world around us </p>
            <p class=" mt-10 mr-3 ml-2  text-lg font-medium text-zinc-400"> Our methodology goes beyond mere data analysis and visualization; we delve deep into the intricacies of your data ecosystem to unearth the hidden insights that drive value for your organization. By unraveling the complexities of your data infrastructure, we empower your business to harness the untapped potential and unlock meaningful outcomes for your stakeholders. </p>
        </div>
        <div  class="w-[300px]  inline-flex  mt-10  mb-24 ml-2   ">                
                <p class="rounded-full py-2 px-4 text-center text-sm font-medium text-black  " style="background:#ffff05;">Our Approach</p>     
                <img src="../new_incons/svgexport-20.png" alt="" class="rounded-full  p-3 w-10" style="background:#ffff05;">    
        </div>

        </div>

       
 
    </div>
</template>


