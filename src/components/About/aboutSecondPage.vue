  
  <script setup>
  const isDesktop = typeof window !== "undefined" && window.innerWidth > 770;
  </script>
  <template>

<main v-if="isDesktop" class="  w-full pl-20 pr-20 " style="background:#2a2a2a">
        <div class=" text-white  ">
           

<article class="grid grid-cols-11 w-full pb-20 ">
        <div class="mt-20 ">
            <p class="relative  border-t-[1px]  block w-[150px]" > <span class="text-[16px] absolute top-0 ">01</span>
                <span class="pl-8 font-bold text-[24px]"> Curiosity</span>  
            </p>  
        </div>
        <div class="mt-20 col-start-5">

            <img src="../new_incons/svgexport-24.png" >
        </div>
        <div class="col-span-4 col-start-8 mt-20 " >
            <p class=" text-[14px]  border-t-[1px] pt-2" >
                Always on the lookout for what's out there, what lies beyond, the reasons and workings behind things, curiosity is a core fiber in everyone at PocketAd. We make it a point to nurture curiosity in our day to day, as it creates the 
                <span class="block mt-1"> conditions for innovation and helps us handle uncertainty and keep our inventiveness sharp.</span> 
            </p>
        </div>
    </article>
    <article class="grid grid-cols-11 w-full pb-20 ">
        <div class="mt-20 ">
            <p class="relative  border-t-[1px]  block w-[200px]" > <span class="text-[16px] absolute top-0 ">02</span>
                <span class="pl-8 font-bold text-[24px]"> Adaptability</span>  
            </p>  
        </div>
        <div class="mt-20 col-start-5">
            <img src="../new_incons/svgexport-25.png" alt="">
        </div>
        <div class="col-span-4 col-start-8 mt-20 " >
            <p class=" text-[14px]  border-t-[1px] pt-2" >
                Light on our feet, we strive to be as nimble as possible, ready to pivot as we incorporate new information. That reflects on the       freshness of the work we deliver, on how we organize our teams, and how we approach   everything from hiring to exploring new spaces.
            </p>
        </div>
    </article>
    <article class="grid grid-cols-11 w-full pb-20 ">
        <div class="mt-20 ">
            <p class="relative  border-t-[1px]  block w-[200px]" > <span class="text-[16px] absolute top-0 ">03</span>
                <span class="pl-8 font-bold text-[24px]"> Collaboration</span>  
            </p>  
        </div>
        <div class="mt-20 col-start-5">
            <img src="../new_incons/svgexport-26.png" alt=""/>
        </div>
        <div class="col-span-4 col-start-8 mt-20 " >
            <p class=" text-[14px]  border-t-[1px] pt-2" >
               Building great teams is at the heart of the way PocketAd operates, and we have a long tradition of organizing our work around cooperation, partnerships and interdisciplinary exchange. Over years of exploring various industries, we have learned to incorporate diverse perspectives early on in everything we do.
            </p>
        </div>
    </article>
    <article class="grid grid-cols-11 w-full pb-20 ">
        <div class="mt-20 ">
            <p class="relative  border-t-[1px]  block w-[200px]" > <span class="text-[16px] absolute top-0 ">04</span>
                <span class="pl-8 font-bold text-[24px]"> Sustainability</span>  
            </p>  
        </div>
        <div class="mt-20 col-start-5">
            <img src="../new_incons/svgexport-27.png" alt=""/>
        </div>
        <div class="col-span-4 col-start-8 mt-20 " >
            <p class=" text-[14px]  border-t-[1px] pt-2" >
                Before anything else, PocketAd is an ecosystem. We have always had clarity about the fact that we are a part of something bigger, and that we nurture from it every bit as much as it is our responsibility to take good care of our surroundings. The only way to be consistent in our effort to co-create the future, is to also create the conditions for that future to be a better version of today.
            </p>
        </div>
    </article>

        </div>
    </main>

    <div v-else style="background-color: #2a2a2a;">
        <div class="h-full  text-white pt-10  ml-2 mr-2">
            <div class='' >
                <img src="../new_incons/svgexport-24.png" class=" h-full  pb-5  ">
                <p class=" border-t-2 text-4xl font-bold pt-2   "><span class=" text-[20px] ml-2 mr-5 font-normal">01</span>  Curiosity</p>
                <p class="mt-10 pl-2 pr-2"> Always on the lookout for what's out there, what lies beyond, the reasons and workings behind things, curiosity is a core fiber in everyone at PocketAd. We make it a point to nurture curiosity in our day to day, as it creates the conditions for innovation and helps us handle uncertainty and keep our inventiveness sharp.</p>
            </div>
            <div >
                <img src="../new_incons/svgexport-25.png" class=" h-full mt-16   pb-5 ">
                <p class=" border-t-2 text-4xl font-bold pt-2  "><span class=" text-[20px] ml-2 mr-5 font-normal">02</span>  Adaptability</p>
                <p class="mt-10 pl-2 pr-2"> Light on our feet, we strive to be as nimble as possible, ready to pivot as we incorporate new information. That reflects on the       freshness of the work we deliver, on how we organize our teams, and how we approach   everything from hiring to exploring new spaces.</p>
            </div>
            <div >
                <img src="../new_incons/svgexport-26.png" class=" h-full mt-16 pb-5 ">
                <p class=" border-t-2 text-4xl font-bold pt-2  "><span class=" text-[20px] ml-2 mr-5 font-normal">03</span> Collaboration  </p>
                <p class="mt-10 pl-2 pr-2">Building great teams is at the heart of the way PocketAd operates, and we have a long tradition of organizing our work around cooperation, partnerships and interdisciplinary exchange. Over years of exploring various industries, we have learned to incorporate diverse perspectives early on in everything we do. </p>
            </div>
            <div  class='mb-44 pb-10'>
                <img src="../new_incons/svgexport-27.png" class=" h-full mt-16 pb-5 ">
                <p class=" border-t-2 text-4xl font-bold pt-2  "><span class=" text-[20px] ml-2 mr-5 font-normal">04</span>  Sustainability</p>
                <p class="mt-10 pl-2 pr-2">Before anything else, PocketAd is an ecosystem. We have always had clarity about the fact that we are a part of something bigger, and that we nurture from it every bit as much as it is our responsibility to take good care of our surroundings. The only way to be consistent in our effort to co-create the future, is to also create the conditions for that future to be a better version of today.</p>
            </div>

            
            

        </div>
        
    </div>

    


</template>
<script >

</script>

<style>


</style>
