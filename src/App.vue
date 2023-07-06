<script setup>
import {  RouterLink ,RouterView } from 'vue-router'
// import HomeView from './views/HomeView.vue';
// import ContactView from './views/ContactView.vue';
// import AboutViews from './views/AboutView.vue';
</script>

<template>

<nav>
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/about"></RouterLink>
        <RouterLink to="/contact"></RouterLink>
</nav>  
<RouterView />  
</template>




