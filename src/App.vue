<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/reset.min.css';
@import './assets/fonts/gilroy/gilroy.css';

.app{
    /* padding: 20px 100px; */
    font-family: 'Gilroy', sans-serif;
    padding: 0 100px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
