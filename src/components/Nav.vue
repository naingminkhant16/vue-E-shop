<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <h1 class="navbar-brand">
        Code 1 <span style="color: #fe4c50">Shop</span>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-1 mb-lg-0">
          <li class="nav-item p-3">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item p-3">
            <router-link class="nav-link" to="/blogs">Blogs</router-link>
          </li>
          <li class="nav-item p-3">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item p-3">
            <router-link class="nav-link" to="/admin">admin</router-link>
          </li>
          <li class="nav-item p-3">
            <router-link class="nav-link" to="/cart"
              ><i class="fa fas fa-shopping-cart"></i
            ></router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-danger" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  border-bottom: 1px groove grey;
  /* max-width: 1200px; */
}
/* .nav-container {
  max-width: 1400px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav-container ul {
  padding: 20px;
  float: right;
}
.nav-container ul li {
  font-size: 13px;
  font-weight: 500;
  display: inline;
  text-transform: uppercase;
  padding: 20px;
  margin-right: 10px;
}
.nav-container ul li a,i {
  text-decoration: none;
  color: #1e1e27;
}
.nav-container i {
  font-size: 15px;
} */
div .container-fluid {
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 20px 60px; */
}
.nav-link {
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
}
.nav-link i {
  font-size: 20px;
}
</style>