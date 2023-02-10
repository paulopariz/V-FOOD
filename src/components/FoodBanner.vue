<template>
  <div class="container mt-44">
    <div
      class="w-full h-80 bg-grennTwo rounded-3xl relative flex justify-between items-center"
    >
      <div class="pl-16 w-5/12">
        <p class="mt-4 tracking-widest leading-8 text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quidem
          dolore reiciendis eaque cumque, ut ullam laudantium quia.
        </p>

        <router-link
          to="/fazer-pedido"
          class="btn mt-10 w-56 bg-white text-grennTwo rounded-3xl hover:bg-gray-200 border-none uppercase"
        >
          Fazer Pedido
        </router-link>
      </div>

      <div class="">
        <img src="../assets/img/Burger.png" class="mt-11 ml-28 w-5/6" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodBanner",
};
</script>

<style></style>
