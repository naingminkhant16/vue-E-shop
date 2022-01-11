<template>
  <div class="banner">
    <div class="banner-container">
      <span>Winter / Spring Collection 2022</span>
      <p>Get up to 30% off</p>
      <p>New Arrivals</p>
      <a>Shop Now</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.banner {
  position: relative;
  width: 100%;
  height: 100vh;

  background: url("../assets/kai-pilger-7YwWjgS7aJs-unsplash.jpg"),
    linear-gradient(to left, rgba(43, 43, 43, 0.65), rgba(199, 72, 72, 0.75));
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  /* object-fit: cover; */
}
.banner-container {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  color: wheat;
}
.banner-container span {
  font-size: 14px;
}
.banner-container p {
  font-size: 72px;
}
.banner-container a {
  padding: 10px;
  background-color: #fe4c50;
  cursor: pointer;
}
@media only screen and (max-width: 1000px) {
  .banner {
    height: 80vh;
  }
  .banner-container p {
    font-size: 50px;
  }
}
@media only screen and (max-width: 700px) {
  .banner-container p {
    font-size: 35px;
  }
}
@media only screen and (max-width: 500px) {
  .banner {
    height: 50vh;
  }
  .banner-container p {
    font-size: 25px;
  }
}
@media only screen and (max-width: 400px) {
  .banner-container {
    font-size: 15px;
    top: 50%;
    left: 50%;
  }
}
</style>
