<template >
<main  v-if="isDesktop" class="sticky top-0 bg-white z-10" >
    <!-- <TheWelcome /> -->
    <nav class=" pl-20  pr-20 shadow flex justify-between items-center pb-3  h-16 ">
      <div class=" my-0  py-0 ">
        <a  href="/" > <img src="../icons/pocketad.io_logo_final.png " class="  h-40 "  > </a>
      </div>
      <div >
        <ul class=" flex items-center  mt-3  ">
          <li><a href="/" class=" text-xs font-bold pl-6">Home</a></li>
          <li><a href="/about" class=" text-xs font-bold pl-6">About</a></li>
          <li><a href="#" class=" text-xs font-bold pl-6">Contact</a></li>
          <li><a href="#" class=" text-xs font-bold pl-6">Services</a></li>
          <li><a href="#" class=" text-xs font-bold pl-6  mr-16">Team</a></li>
          <li> <button type="submit" class="rounded-full font-bold bg-black text-white text-xs ml-15 p-2 ">Contact Us</button></li>
          <li> <button type="submit" class="rounded-full  font-bold text-xs ml-2 p-2 outline outline-1  inline-flex px-3">
            ENG <img src="../new_incons/down-arrow-svgrepo-com.png" width="10" class="mt-1 ml-1 " >
              </button></li>
        </ul>
      </div>
    </nav>
  </main>  
  <main v-else class=" top-0 " >
    <!-- <TheWelcome /> -->
    <nav class="  flex  justify-between pb-3 ">
      <div >
        <a  href="/" > <img src="../icons/pocketad.io_logo_final.png" class="  h-28 top-0 w-32"> </a>
      </div>
      <div class="flex  mt-7 rounded-full items-center h-12 py-5    px-3  shadow-2xl shadow-slate-500 cursor-pointer   mr-4" >
        <div>
          <img src="../icons/menu.png" alt="no img" class=" w-8  " @click='toggleModel'>
        </div>
        
      </div>
       <baseModel :modelActive='modelActive'  
        @close-model='toggleModel'       
       >
        <div class='text-white px-6'>
          <div class='border-b border-slate-500  mb-3'>
            <h3 class=' text-5xl  font-bold mt-10  mb-60   '>About</h3>
          </div>
          <div class='mt-10 grid grid-cols-10 '>
            <img src="../new_incons/linkedin-white.png" alt="" class=' col-span-2  w-12 place-items-start  '>
            <img src="../new_incons/behance-white.png" alt="" class=' col-span-2 w-12 '>
            <img src="../new_incons/Instagram-white.png" alt="" class=' col-span-2 w-12 '>
            <img src="../new_incons/facebook-white.png" alt="" class=' col-span-2 w-12 '>
            <img src="../new_incons/twitter-white.png" alt="" class=' col-span-2 w-12 '>
          </div>
          <div class='mt-10 grid grid-cols-7 mb-10 pl-3'>
            <div class=' col-span-4'>
              <p>Term and condition </p>
              <p>Cookies Policy </p>
              <p>Privacy </p>
            </div>
            <div class='col-span-3'>
              <div class=" outline outline-1 rounded-full "> 
                    <p class="  font-bold text-[16px]  py-1 flex justify-center  px-5 ">
                        ENG
                         <img src="../new_incons/icons8-collapse-arrow-50.png"  class=" -mt-5  ml-4 w-3 pb-5 rotate-180  inline-flex " >
                    </p>
              </div>
            </div>
            
          </div>  
        </div>
       
       </baseModel>     
    </nav>
  </main>  


</template>

<script setup>
  import baseModel from "./baseModel.vue";
  import { ref } from "vue";

  const isDesktop = typeof window !== "undefined" && window.innerWidth > 770;
  const modelActive = ref(null);

  const toggleModel = () => {
    modelActive.value = !modelActive.value;
  };
</script>