<template>
  <div class="admin-container">
    <h1 class="title">Admin Panel</h1>
    <form @submit.prevent="addProduct" class="container">
      <div class="mb-3">
        <label class="form-label">Product's Title</label>
        <input
          type="text"
          class="form-control"
          placeholder="Title..."
          v-model="title"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Product's Price</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price..."
          v-model="price"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">User's product-quantity(Default Zero)</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price..."
          v-model="quantity"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Product's Image</label>
        <input
          type="file"
          class="form-control"
          placeholder="Image..."
          v-on:change="getImg"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Product's Detail</label>
        <textarea
          class="form-control"
          rows="3"
          placeholder="Detail..."
          v-model="detail"
        ></textarea>
      </div>
      <button type="submit" class="form-control">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { db } from "../firebase/config";
import { addDoc, collection } from "@firebase/firestore";
export default {
  setup() {
    let router = useRouter();
    let title = ref("");
    let price = ref("");
    let detail = ref("");
    let img = ref("");
    let quantity=ref(0);
    function getImg(e) {
      // console.log(e.target.files[0].name)
      img.value = e.target.files[0].name;
    }
    let addProduct = async () => {
      //   console.log(title.value);
      //   console.log(price.value);
      //   console.log(detail.value);
      //   console.log(img.value);
      let newProduct = {
        title: title.value,
        price: price.value,
        detail: detail.value,
        img: img.value,
        quantity:quantity.value
      };
      await addDoc(collection(db, "products"), newProduct);
      router.push("/");
    };
    return { title, price, quantity, detail, img, getImg, addProduct };
  },
};
</script>

<style scoped>
.admin-container {
  max-width: 1200px;
  margin: 0 auto;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
}
button {
  background-color: #fe4c50;
  color: white;
}
button:hover {
  background-color: #fa3d40;
}
</style>