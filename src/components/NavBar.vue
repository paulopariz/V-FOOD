<template>
  <nav class="container py-10 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <img :src="logo" />
      <h1 class="font-bold font-flame">V-FOOD</h1>
    </div>
    <div class="flex items-center gap-16 font-medium max-md:hidden">
      <router-link class="max-lg:text-sm" to="/">Início</router-link>

      <router-link class="max-lg:text-sm" to="/fazer-pedido">Fazer Pedido</router-link>
      <router-link
        to="/pedidos"
        class="py-4 px-8 rounded-full flex gap-3 items-center bg-base-200 max-lg:text-sm"
      >
        <span>Meus Pedidos</span>
        <div
          v-if="burgers.length"
          class="bg-grennOne text-white font-semibold text-xs w-4 h-4 flex items-center justify-center p-2.5 rounded-full -mt-12 ml-28 absolute max-lg:ml-24"
        >
          {{ burgers.length }}
        </div>
      </router-link>
    </div>

    <div class="dropdown dropdown-end hidden max-md:block">
      <label
        tabindex="0"
        class="btn border-none bg-transparent focus:bg-transparent"
        @click="openMenu"
      >
        <svg
          class="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path
            d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
          />
        </svg>
      </label>
      <ul
        v-show="menu"
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
      >
        <li>
          <router-link class="max-lg:text-sm" to="/">Início</router-link>
        </li>

        <li>
          <router-link class="max-lg:text-sm" to="/fazer-pedido"
            >Fazer Pedido</router-link
          >
        </li>

        <li>
          <router-link
            to="/pedidos"
            class="rounded-full flex items-center bg-base-200 max-lg:text-sm"
          >
            <span>Meus Pedidos</span>
            <div
              v-if="burgers.length"
              class="bg-grennOne text-white font-semibold text-xs w-4 h-4 flex items-center justify-center p-2.5 rounded-full"
            >
              {{ burgers.length }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      burgers: [],
      logo: require("../assets/img/logo.svg"),

      menu: false,
    };
  },

  methods: {
    async getPedidos() {
      const api = await fetch("http://localhost:3000/burgers");

      const data = await api.json();

      this.burgers = data;
    },

    openMenu() {
      this.menu = !this.menu;
    },
  },

  mounted() {
    this.getPedidos();
  },
};
</script>
