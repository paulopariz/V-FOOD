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
  color: #fff;
  font-family: "Roboto", sans-serif;
}

*::-webkit-scrollbar {
  width: 0px;
}
</style>
