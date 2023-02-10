<template>
  <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
    <h1 class="text-2xl font-semibold tracking-wider">Nenhum pedido realizado!</h1>

    <router-link
      to="/fazer-pedido"
      class="btn mt-10 w-full bg-grennTwo hover:bg-grennOne border-none uppercase"
    >
      Fazer Pedido
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FoodEmpty",
};
</script>

<style></style>
