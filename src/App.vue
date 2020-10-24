<template>
  <div id="app" class="row pd mg">
    <Sidebar class="col-sm-2 pd"></Sidebar>
    <router-view class="col-sm-10"></router-view>
  </div>
</template>

<script>
import Sidebar from './components/sidebar.vue'

// import $ from 'jquery'

export default {
  name: "app",
  components: {
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
