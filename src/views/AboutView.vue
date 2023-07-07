<script setup>

import Nav from "../components/menu/Nav.vue"
import aboutLanding from "../components/About/AboutLandingPage.vue"
import AboutSecondaryPage from "../components/About/aboutSecondPage.vue";
import AboutLeadership from "../components/About/AboutLeadership.vue";
import Footer from "../components/menu/footer.vue"
</script>

<template> 
    <!-- <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet"/> -->
<div class="sm:text-center myFont">    
    <Nav/>
    <aboutLanding/>
    <AboutSecondaryPage/>
    <AboutLeadership/>
    <Footer/>
</div>
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