<template>
  <div class="container mt-5 mb-20">
    <form @submit="createFood" class="max-w-3xl m-auto bg-base-200 py-10 px-14">
      <div class="p-2 rounded-3xl flex justify-center flex-col">
        <div class="flex justify-center flex-col">
          <label for="name" class="font-semibold">Nome</label>
          <input
            type="text"
            name="nome"
            class="bg-transparent outline-none p-3 border-b-2 border-b-base-300"
            v-model="nome"
            placeholder="Digite seu nome"
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
            />
            <span class="text-sm">{{ opcional.tipo }}</span>
          </div>
        </div>
      </div>
      <div class="">
        <input
          type="submit"
          name="submit-btn"
          class="btn mt-10 w-full bg-grennTwo hover:bg-grennOne border-none"
          value="Criar Burguer"
        />
      </div>
    </form>
  </div>
</template>

<script>
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

      const data = {
        nome: this.nome,
        sobrenome: this.sobrenome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
        status: "Solicitado",
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
    },
  },

  mounted() {
    this.getIngredientes();
  },
};
</script>
