<template>
  <div id="nav">
    <Nav></Nav>
  </div>
  <router-view />
  <Footer></Footer>
</template>
<script>
import Footer from './components/Footer'
import Nav from "./components/Nav";
export default {
  components: {
    Footer, Nav },
  setup() {},
};
</script>
<style>
#app {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}

#nav a.router-link-exact-active {
  color: #fe4c50;
}
</style>
