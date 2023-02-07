<template>
  <nav class="container py-10 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <img :src="logo" />
      <h1 class="font-bold">V-FOOD</h1>
    </div>
    <div class="flex items-center gap-16 font-medium">
      <router-link to="/">Início</router-link>

      <router-link to="/fazer-pedido">Fazer Pedido</router-link>
      <router-link
        to="/pedidos"
        class="py-4 px-8 rounded-full flex gap-3 items-center bg-base-200"
      >
        <span>Meus Pedidos</span>
        <div
          class="bg-grennOne text-white font-semibold text-xs w-4 h-4 flex items-center justify-center p-2.5 rounded-full -mt-12 ml-28 absolute"
        >
          2
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      logo: require("../assets/img/logo.svg"),
      cart: require("../assets/img/cart.svg"),
    };
  },
};
</script>
