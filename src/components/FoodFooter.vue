<template>
  <footer class="container flex items-center justify-between">
    <div class="flex items-center gap-3">
      <img :src="logo" />
      <h1 class="font-bold">V-FOOD</h1>
    </div>
    <div v-for="obj in sociais" :key="obj">
      <a :href="obj.href">
        <img :src="obj.icon" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FoodFooter",

  data() {
    return {
      logo: require("../assets/img/logo.svg"),

      sociais: [
        {
          icon: require("../assets/img/instagram.svg"),
          href: "#",
        },
        {
          icon: require("../assets/img/linkedin.svg"),
          href: "#",
        },
        {
          icon: require("../assets/img/github.svg"),
          href: "#",
        },
      ],
    };
  },
};
</script>

<style></style>
