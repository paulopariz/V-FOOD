<template>
  <div class="container mt-16">
    <h1 class="text-4xl font-semibold">Cardápio</h1>

    <div class="flex items-center gap-8 mt-7">
      <button
        class="btn rounded-full bg-base-200 text-black border-none hover:bg-base-300 text-xs"
      >
        Sanduíches
      </button>
      <button
        class="btn rounded-full bg-base-200 text-black border-none hover:bg-base-300 text-xs"
      >
        Bebidas
      </button>
      <button
        class="btn rounded-full bg-base-200 text-black border-none hover:bg-base-300 text-xs"
      >
        Acompanhamentos
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodMenuBtn",
};
</script>

<style></style>
