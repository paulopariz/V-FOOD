<template>
  <div class="container mt-12 grid">
    <div class="">
      <div
        class="flex items-center gap-14 border-none bg-base-200 mt-8 rounded-3xl"
        v-for="burger in burgers"
        :key="burger.id"
      >
        <div>
          <img class="w-36 bg-grennTwo rounded-3xl" src="../assets/img/Balloon.svg" />
        </div>

        <span
          class="bg-grennOne text-white text-xs font-semibold border-2 border-grennThree p-1 w-6 h-6 flex items-center justify-center rounded-full"
          >{{ burger.id }}</span
        >

        <div class="flex justify-between items-center gap-14">
          <div class="w-44">
            <span class="font-semibold">Nome: </span>
            <h1 class="text-sm">{{ burger.nome }} {{ burger.sobrenome }}</h1>
          </div>

          <div class="w-44">
            <span class="font-semibold">Pão: </span>
            <h1 class="text-sm">{{ burger.pao }}</h1>
          </div>
          <div class="w-44">
            <span class="font-semibold">Carne: </span>
            <h1 class="text-sm">{{ burger.carne }}</h1>
          </div>
          <div class="w-44">
            <div class="dropdown dropdown-right dropdown-end">
              <label
                tabindex="0"
                class="btn m-1 btn-sm text-xs bg-grennTwo hover:bg-grennOne border-none"
                >Opcionais</label
              >
              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
              >
                <li
                  v-for="(opcional, index) in burger.opcionais"
                  :key="index"
                  class="font-semibold p-1"
                >
                  {{ opcional }}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <select
              name="status"
              class="status text-black hidden"
              @change="updatedBurger($event, burger.id)"
            >
              <option value="">Selecione o status</option>
              <option
                v-for="s in status"
                :key="s.id"
                :value="s.tipo"
                :selected="burger.status == s.tipo"
              >
                {{ s.tipo }}
              </option>
            </select>
          </div>
          <button
            class="h-36 w-20 btn bg-red-700 hover:bg-red-600 border-none float-right flex items-center justify-center ml-48 rounded-3xl rounded-l-none"
            @click="deleteBurger(burger.id)"
          >
            <img src="../assets/img/trash.svg" class="w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodDashboard",

  data() {
    return {
      burgers: [],
      burgers_id: null,
      status: [],
    };
  },

  methods: {
    async getPedidos() {
      const api = await fetch("http://localhost:3000/burgers");

      const data = await api.json();

      this.burgers = data;

      this.getStatus();
    },

    async getStatus() {
      const api = await fetch("http://localhost:3000/status");

      const data = await api.json();

      this.status = data;
    },

    async deleteBurger(id) {
      const api = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE",
      });

      const res = await api.json();

      console.log(res);

      this.getPedidos();
    },

    async updatedBurger(event, id) {
      const option = event.target.value;

      const dataJson = JSON.stringify({ status: option });

      const api = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await api.json();

      console.log(res);
    },
  },

  mounted() {
    this.getPedidos();
  },
};
</script>
