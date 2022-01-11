import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Admin from '../views/Admin.vue'
import ProductDetail from "../views/ProductDetail.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name:'Cart',
    component:Cart
  },
  {
    path:'/admin',
    name:'Admin',
    component:Admin
  },
  {
    path:'/productDetail/:id',
    name:"productDetail",
    component:ProductDetail,
    props:true
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
