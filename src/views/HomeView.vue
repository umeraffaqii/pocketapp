<script setup>

import HomeLanding from '../components/Home/HomeLanding.vue'
import Nav from "../components/menu/Nav.vue"
import Homeexperience from '../components/Home/Homeexperience.vue'
import HomeThirdPage from "../components/Home/HomeThirdPage.vue"
import HomeBlack from "../components/Home/HomeBlack.vue" 
import Footer from "../components/menu/footer.vue"
</script>

<template>
  <div   class="myFont">
  <Nav/>
  <HomeLanding/>
  <HomeThirdPage/>
  <Homeexperience/>
  <HomeBlack/>
  <Footer/>
</div>
</template>
<style>
font-face {
 font-family: myFont;
    src: url('../components/avenir_ffont/AvenirLTStd-Roman.otf');
}
</style>

