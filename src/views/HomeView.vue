<template>
  <div class="home">
    <FoodBanner />
    <FoodMenuOptions />
  </div>
</template>

<script>
import FoodBanner from "@/components/FoodBanner.vue";
import FoodMenuOptions from "@/components/FoodMenuOptions.vue";
export default {
  components: { FoodBanner, FoodMenuOptions },
};
</script>

<style></style>
