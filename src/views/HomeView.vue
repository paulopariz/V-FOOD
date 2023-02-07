<template>
  <div class="home">
    <FoodBanner />
    <FoodMenuBtn />
  </div>
</template>

<script>
import FoodBanner from "@/components/FoodBanner.vue";
import FoodMenuBtn from "@/components/FoodMenuBtn.vue";
export default {
  components: { FoodBanner, FoodMenuBtn },
};
</script>

<style></style>
