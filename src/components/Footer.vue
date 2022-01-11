<template>
  <!-- <h1 class="title">footer</h1> -->
  <div class="first-row">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <h4>Newsletter</h4>
        <small
          >Subscribe to our newsletter and get 20% off your first
          purchase</small
        >
      </div>
      <div class="col">
        <div class="input-group mt-2">
          <input type="email" class="form-control" placeholder="Your Email" />
          <span class="input-group-text">Subscribe</span>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <span>Blogs</span>
        <span>FAQs</span>
        <span>Contact Us</span>
      </div>
      <div class="col">
        <span><i class="fab fa-facebook-f"></i></span>
        <span><i class="fab fa-twitter"></i></span>
        <span><i class="fab fa-instagram"></i></span>
        <span><i class="fab fa-linkedin-in"></i></span>
      </div>
    </div>
    <p class="copy">©2022 All Rights Reserverd. Made by Burma Code 1</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.first-row {
  background-color: #eee;
  padding: 30px;
  margin-top: 80px;
}
.first-row .row {
  max-width: 1200px;
  margin: 0px auto;
}
.col h4 {
  font-weight: bold;
}
.input-group {
  max-width: 450px;
  height: 45px;
}

.input-group span {
  background-color: #fe4c50;
  color: white;
  text-transform: uppercase;
}
.input-group span,
input {
  padding: 10px;
  border-radius: 0;
}
.container {
  padding-top: 40px;
  max-width: 1200px;
  /* margin: 0px auto; */
}
.container span {
  font-size: 14px;
  color: #51545f;
  line-height: 30px;
  margin: 0px 45px 0px 0px;
}
.container i {
  font-size: 15px;
}
.container .copy {
  margin-top: 40px;
  font-size: 14px;
  color: #51545f;
  line-height: 30px;
}
</style>