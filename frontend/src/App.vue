<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <img class= "small" src="https://cdn-icons-png.flaticon.com/512/5399/5399667.png">
      <router-link to="/" class="navbar-brand">My Page</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Library</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">Info</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3 pagina">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
.pagina {
  background-color: #ffcc99;

}
.small {
  width: 50px;
  height: 50px;
}
</style>