<template>
  <div class="about">
    <h1>PEDIDOS</h1>
    <FoodDashboard />
  </div>
</template>

<script>
import FoodDashboard from "@/components/FoodDashboard.vue";
export default {
  components: { FoodDashboard },
  name: "RequestsView",
};
</script>
