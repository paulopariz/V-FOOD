<template>
  <div>
    <form>
      <div class="input-container">
        <label for="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="name"
          placeholder="Digite seu nome"
        />
      </div>
      <div class="input-container">
        <label for="name">Pao</label>
        <select name="pao" id="pao" v-model="pao">
          <option value="">Selecione seu pao</option>
          <option value="integral">Integral</option>
        </select>
      </div>
      <div class="input-container">
        <label for="name">Carne</label>
        <select name="carne" id="carne" v-model="carne">
          <option value="">Selecione sua carne</option>
          <option value="maminha">Maminha</option>
        </select>
      </div>
      <div id="opcionais-container" class="input-container">
        <label id="opcionais-title" for="name">Opcionais</label>
        <div class="checkbox-container">
          <input type="checkbox" name="opcionais" v-model="opcionais" value="salame" />
          <span>Salame</span>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="opcionais" v-model="opcionais" value="salame" />
          <span>Salame</span>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="opcionais" v-model="opcionais" value="salame" />
          <span>Salame</span>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="opcionais" v-model="opcionais" value="salame" />
          <span>Salame</span>
        </div>
      </div>
      <div class="input-container">
        <input type="submit" name="submit-btn" value="Criar Burguer" />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #fff;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}
input,
select {
  padding: 5px 10px;
  width: 300px;
}
#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}
#opcionais-title {
  width: 100%;
}
.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}
.checkbox-container span,
.checkbox-container input {
  width: auto;
}
.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}
.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.submit-btn:hover {
  background-color: transparent;
  color: #fff;
}
</style>
Footer
