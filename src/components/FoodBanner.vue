<template>
  <div class="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div
      class="w-full h-80 bg-grennTwo rounded-3xl relative flex justify-between items-center max-sm:h-44"
    >
      <div class="pl-16 w-5/12 max-xl:w-3/4 max-lg:pl-6 max-lg:w-11/12 max-md:w-1/4">
        <p
          class="mt-4 tracking-widest leading-8 text-lg max-xl:text-base max-lg:text-sm max-lg:leading-6 max-md:hidden"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quidem
          dolore reiciendis eaque cumque, ut ullam laudantium quia.
        </p>

        <router-link
          to="/fazer-pedido"
          class="btn mt-10 w-56 bg-white text-grennTwo rounded-3xl hover:bg-gray-200 border-none uppercase max-xl:mt-5 max-md:w-44 max-md:text-xs max-sm:hidden"
        >
          Fazer Pedido
        </router-link>
      </div>

      <div class="">
        <img
          src="../assets/img/Burger.png"
          class="mt-11 ml-28 w-5/6 max-lg:ml-16 max-sm:-mt-5"
        />
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
