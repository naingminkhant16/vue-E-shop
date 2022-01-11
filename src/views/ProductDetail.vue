<template>
  <h1 class="title">Product's Details</h1>
  <div class="single card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="require(`@/assets/${product.img}`)"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">{{ product.title }}</h2>
          <p class="card-text">{{ product.detail }}</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
    <router-link to="/"> <i class="fas fa-angle-double-left"></i> </router-link>
  </div>
</template>

<script>
import { getSingleProduct } from "../composables/getSingleProduct";
export default {
  props: ["id"],
  setup(props) {
    let { product, getItem } = getSingleProduct(props.id);
    getItem();
    return { product };
  },
};
</script>

<style>
/* h1 {
  margin: 40px auto;
  text-align: center;
  text-transform: uppercase;
} */
.single {
  max-width: 800px;

  margin: 40px auto;
}
.card-title {
  color: #fe4c50;
}
.card-text {
  font-size: 20px;
}
i {
  margin-left: 10px;
  font-size: 30px;
}
i:hover {
  color: #fa3d40;
}
</style>