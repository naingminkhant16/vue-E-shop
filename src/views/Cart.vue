<template>
  <h1 class="title">Cart</h1>
  <div class="container">
    <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4">
      <div class="items" v-for="item in items" :key="item.id">
        <div class="col">
          <div class="card h-100">
            <img
              :src="require(`@/assets/${item.img}`)"
              class="card-img-top"
              alt="no img"
            />
            <div class="card-body">
              <router-link
                :to="{ name: 'productDetail', params: { id: item.id } }"
              >
                <p class="card-text">{{ item.title }}</p>
              </router-link>

              <p>$ {{ item.price }}</p>
            </div>
            <div class="card-footer" @click="remove(item.id)">
              <span class="">Remove from cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-if="items.length<1">No Items Selected</p>
  </div>
</template>

<script>
import { cartItems } from "../composables/cartItems";
export default {
  setup() {
    let items = cartItems;
    console.log(items.value);
    function remove(id) {
      items.value = items.value.filter((item) => {
        return item.id !== id;
      });
    }
    
    return { items, remove };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.container .card-body {
  padding: 0px;
}
.container p {
  text-align: center;
}
.container .card-footer {
  display: flex;
  align-items: center;
  background-color: #fe4c50;
}
.container .card-footer span {
  margin: 0px auto;
  color: white;
}
.container .card-footer:hover {
  cursor: pointer;
  background-color: #fa3d40;
}
.container .col {
  transition: 0.5s ease-in-out;
}
.container .col:hover {
  transform: scale(1.005);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
a {
  text-decoration: none;
  color: #1e1e27;
}
a:hover {
  color: #fe4c50;
}
</style>