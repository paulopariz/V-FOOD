<template>
  <div>
    <FoodMenuBtn />

    <div class="mt-28 container mb-48 grid grid-cols-3 gap-8 gap-y-32">
      <div v-for="obj in menu" :key="obj">
        <div class="border-2 border-base-300 rounded-3xl">
          <div class="-mt-16 bg-grennTwo rounded-3xl rounded-b-none">
            <img :src="obj.img" class="m-auto -rotate-6" />
          </div>
          <div class="rounded-3xl rounded-t-none p-10">
            <h1 class="font-semibold">
              {{ obj.option }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FoodMenuBtn from "./FoodMenuBtn.vue";

export default {
  name: "FoodMenuOptions",

  components: {
    FoodMenuBtn,
  },

  data() {
    return {
      menu: [
        {
          img: require("../assets/img/Balloon.svg"),
          option: "SANDUÍCHE",
        },
        {
          img: require("../assets/img/Balloon2.svg"),
          option: "BEBIDA",
        },
        {
          img: require("../assets/img/Balloon3.svg"),
          option: "ACOMPANHAMENTO",
        },
        {
          img: require("../assets/img/Balloon.svg"),
          option: "SANDUÍCHE",
        },
      ],
    };
  },
};
</script>
