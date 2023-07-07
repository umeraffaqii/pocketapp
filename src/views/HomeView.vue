<script setup>
import Nav from "../components/menu/Nav.vue"

import homeSecond from "../components/Home/homeSecond.vue";
import homeThird from "../components/Home/homeThird.vue";
import homeForth from "../components/Home/homeForth.vue";
import Footer from "../components/menu/footer.vue"
</script>

<template>

  <main class=" sm:text-center myFont">
      <Nav/>
      <homeSecond/>
      <homeThird/>
      <homeForth/>
      <Footer/>
  </main>
  
</template>

<!-- <style>
font-face {
font-family: myFont;
 
    src: href="https://fonts.cdnfonts.com/css/avenir";
}
</style> -->

<style>
font-face {
 font-family: myFont;
    src: url('../components/avenir_ffont/AvenirLTStd-Roman.otf');
}
</style>