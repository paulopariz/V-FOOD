<template>
  <div class="container mt-5 mb-20">
    <form class="max-w-3xl m-auto bg-base-200 py-10 px-14">
      <div class="p-2 rounded-3xl flex justify-center flex-col">
        <div class="flex justify-center flex-col">
          <label for="name" class="font-semibold">Nome</label>
          <input
            type="text"
            name="nome"
            class="bg-transparent outline-none p-3 border-b-2 border-b-base-300"
            v-model="nome"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div class="flex justify-center flex-col mt-6">
          <label for="name" class="font-semibold">Sobrenome</label>
          <input
            type="text"
            name="nome"
            class="bg-transparent outline-none p-3 border-b-2 border-b-base-300"
            v-model="sobrenome"
            placeholder="Digite seu sobrenome"
            required
          />
        </div>
      </div>
      <div class="p-2 rounded-3xl flex justify-center flex-col mt-4">
        <label for="pao" class="font-semibold mb-2">Pão:</label>
        <select name="pao" class="select w-full" v-model="pao">
          <option disabled selected>Selecione o tipo de pão</option>
          <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
            {{ pao.tipo }}
          </option>
        </select>
      </div>
      <div class="p-2 rounded-3xl flex justify-center flex-col mt-4">
        <label for="carne" class="font-semibold mb-2">Carne:</label>
        <select name="carne" class="select w-full" v-model="carne">
          <option disabled selected>Selecione sua carne</option>
          <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
            {{ carne.tipo }}
          </option>
        </select>
      </div>
      <div
        id="opcionais-container"
        class="p-2 rounded-3xl flex justify-center flex-col mt-2"
      >
        <label for="opcionais" class="font-semibold mb-2">Opcionais:</label>
        <div class="grid grid-cols-3 gap-8">
          <div
            class="flex items-center gap-3"
            v-for="opcional in opcionaisdata"
            :key="opcional.id"
          >
            <input
              type="checkbox"
              name="opcionais"
              checked="checked"
              class="checkbox"
              v-model="opcionais"
              :value="opcional.tipo"
              required
            />
            <span class="text-sm">{{ opcional.tipo }}</span>
          </div>
        </div>
      </div>
      <div class="">
        <label
          for="my-modal-3"
          class="btn mt-10 w-full bg-grennTwo hover:bg-grennOne border-none uppercase"
          >FAZER PEDIDO</label
        >

        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn bg-transparent border-none btn-sm absolute right-2 top-2 text-lg"
              >✕</label
            >
            <h3 class="text-xl font-bold">Confirmar pedido?</h3>
            <p class="py-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quis
              debitis.
            </p>

            <div class="flex items-center justify-end gap-4">
              <input
                type="submit"
                name="submit-btn"
                @click="createFood"
                class="btn mt-5 bg-grennTwo hover:bg-grennOne border-none uppercase text-xs"
                value="Sim, confirmar!"
              />
              <label
                for="my-modal-3"
                class="btn mt-5 bg-red-700 hover:bg-red-600 border-none uppercase text-xs"
                >Não, cancelar!</label
              >
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "FoodForm",

  data() {
    return {
      // DADOS DO SERVIDOR
      paes: null,
      carnes: null,
      opcionaisdata: null,
      //

      // DADOS DO FORMULARIO(v-model)
      nome: null,
      sobrenome: null,
      pao: null,
      carne: null,
      opcionais: [],
      //

      msg: null,
    };
  },

  methods: {
    async getIngredientes() {
      const api = await fetch("http://localhost:3000/ingredientes");
      const data = await api.json();

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;
    },

    async createFood(e) {
      e.preventDefault();

      if (this.nome < 3 && this.sobrenome < 3) {
        return false;
      }

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
        title: "Pedido Confirmado!",
      });

      const data = {
        nome: this.nome,
        sobrenome: this.sobrenome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
      };

      const dataJson = JSON.stringify(data);

      const api = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await api.json();

      console.log(res);

      (this.nome = ""),
        (this.sobrenome = ""),
        (this.carne = ""),
        (this.pao = ""),
        (this.opcionais = "");

      setTimeout(() => {
        router.push("/pedidos");
        setTimeout(() => {
          document.location.reload(true);
        }, 100);
      }, 3000);
    },
  },

  mounted() {
    this.getIngredientes();
  },
};
</script>
