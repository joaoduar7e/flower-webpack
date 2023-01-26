<template>
  <div class="body">

    <div class="div-img-principal">
          <img class="img-principal" :src="flower.img" alt="" />
    </div>

    <div class="title">
      {{ flower.name }}
    </div>

    <section>
      <div class="info">
        <label class="type-title">Nome científico</label>
        <p class="type-info">{{ flower.authors }}</p>
      </div>
      <div class="info">
        <label class="type-title">Sobre</label>
        <p class="type-info">{{ flower.description }}</p>
      </div>
      <div class="info">
        <label class="type-title">Imagem</label>
        <div class="card">
          <img class="imagem-responsiva" :src="flower.img" alt="" />
        </div>
      </div>
      <div class="info">
        <label class="type-title">Uso da planta</label>
        <p class="type-info">{{ flower.authors }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import api from "../../../service/api";

export default {
  props: ["id"],
  data() {
    return {
      flower: []
    };
  },

  created() {
    this.getFlower();
  },

  methods: {
    getFlower() {
      api
        .get("/flowers/" + this.id)
        .then(res => {
          this.flower = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>

.body {
  margin: 0px;
  padding: 0px;
  font-family: "Quicksand";
}

.div-img-principal{
  margin: -50px auto auto auto;
  max-width: 540px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.img-principal{
  width: 100%;
  height:  100%;
  display: block;
    margin-left: auto;
    margin-right: auto
}
.title {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
}

.info {
  display: flex;
  flex-direction: column;
  max-width: 540px;
  justify-content: center;
  margin: 0 auto;
}

.type-title {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}

.type-info {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}

.card {
  max-width: 128px;
  height: 160px;

  border-radius: 16px;
}

.imagem-responsiva{ 
  width: 100%;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
    
  border-radius: 16px;
}
</style>
