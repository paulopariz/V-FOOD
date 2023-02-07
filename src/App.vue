<template>
  <div>
    <NavBar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style>
body {
  color: #000;
  font-family: "Montserrat", sans-serif;
}
</style>
