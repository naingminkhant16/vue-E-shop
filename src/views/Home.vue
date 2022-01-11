<template>
  <div class="home">
    <Banner></Banner>
    <Products></Products>
  </div>
</template>

<script>
import Products from "../components/Products";
import Banner from "../components/Banner";
export default {
  components: {
    Products,
    Banner,
  },
};
</script>
<style >

.title {
  margin: 80px auto;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  padding: 10px;
}
.title::after {
  content: "";
  position: absolute;
  left: 50%;
  top:100%;
  /* bottom: 40px; */
  width: 200px;
  height: 4px;
  transform:  translate(-50%);
  background: #fe4c50;
  /* z-index: -1; */
}
</style>
