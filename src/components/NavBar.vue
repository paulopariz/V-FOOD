<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/requests">Pedifos</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
nav {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: end;
}
a {
  color: white;
  margin-right: 5px;
}
</style>
