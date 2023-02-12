<template>
  <div class="container mt-12 grid" v-if="burgers.length">
    <div class="max-lg:grid max-lg:grid-cols-2 max-lg:gap-x-5 max-sm:grid-cols-1">
      <div
        class="flex items-center justify-between gap-14 border-none bg-base-200 mb-8 rounded-3xl max-xl:gap-6 max-lg:grid max-lg:grid-cols-1"
        v-for="burger in burgers"
        :key="burger.id"
      >
        <div class="bg-grennTwo rounded-l-3xl max-lg:rounded-3xl max-lg:rounded-b-none">
          <img
            class="w-36 rounded-3xl max-lg:w-40 max-lg:m-auto max-lg:rounded-b-none"
            src="../assets/img/Balloon.svg"
          />
        </div>

        <span
          class="bg-grennOne text-white text-xs font-semibold border-2 border-grennThree p-1 w-6 h-6 flex items-center justify-center rounded-full max-lg:ml-8"
          >{{ burger.id }}</span
        >

        <div
          class="flex justify-between items-center gap-1 max-lg:grid max-lg:grid-cols-2 max-lg:gap-y-7 max-lg:place-items-center"
        >
          <div class="w-44 max-lg:w-28">
            <span class="font-semibold">Nome: </span>
            <h1 class="text-sm">{{ burger.nome }} {{ burger.sobrenome }}</h1>
          </div>

          <div class="w-44 max-lg:w-28">
            <span class="font-semibold">Pão: </span>
            <h1 class="text-sm">{{ burger.pao }}</h1>
          </div>
          <div class="w-44 max-lg:w-28">
            <span class="font-semibold">Carne: </span>
            <h1 class="text-sm">{{ burger.carne }}</h1>
          </div>
          <div class="w-44 max-lg:w-28">
            <div class="dropdown dropdown-top dropdown-end">
              <label
                tabindex="0"
                class="btn m-1 btn-sm text-sm bg-grennTwo hover:bg-grennOne border-none"
                >Opcionais</label
              >
              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
              >
                <li
                  v-for="(opcional, index) in burger.opcionais"
                  :key="index"
                  class="font-semibold p-1 text-xs"
                >
                  {{ opcional }}
                </li>
              </ul>
            </div>
          </div>

          <div></div>
        </div>
        <label
          for="my-modal-3"
          class="h-36 w-20 btn bg-red-700 hover:bg-red-600 border-none float-right flex items-center justify-center rounded-3xl rounded-l-none max-lg:w-full max-lg:rounded-none max-lg:h-6 max-lg:rounded-b-3xl"
        >
          <img src="../assets/img/trash.svg" class="w-5" />
        </label>

        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn bg-transparent border-none btn-sm absolute right-2 top-2 text-lg"
              >✕</label
            >
            <h3 class="text-xl font-bold">Cancelar pedido?</h3>
            <p class="py-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quis
              debitis.
            </p>

            <div class="flex items-center justify-end gap-4">
              <button
                @click="deleteBurger(burger.id)"
                class="btn mt-5 bg-grennTwo hover:bg-grennOne border-none uppercase text-xs"
              >
                Sim
              </button>
              <label
                for="my-modal-3"
                class="btn mt-5 bg-red-700 hover:bg-red-600 border-none uppercase text-xs"
                >Não</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FoodEmpty v-else />
</template>

<script>
import FoodEmpty from "./FoodEmpty.vue";

export default {
  components: { FoodEmpty },
  name: "FoodDashboard",

  data() {
    return {
      burgers: [],
      burgers_id: null,
    };
  },

  methods: {
    async getPedidos() {
      const api = await fetch("http://localhost:3000/burgers");

      const data = await api.json();

      this.burgers = data;
    },

    async deleteBurger(id) {
      const Toast = this.$swal.mixin({
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        background: "#000",
        iconColor: "#337d26",
        color: "#fff",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Pedido cancelado, com sucesso!",
      });

      const api = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE",
      });

      const res = await api.json();
      setTimeout(() => {
        console.log(res);

        this.getPedidos();
      }, 1000);

      setTimeout(() => {
        setTimeout(() => {
          document.location.reload(true);
        }, 100);
      }, 3000);
    },
  },

  mounted() {
    this.getPedidos();
  },
};
</script>
