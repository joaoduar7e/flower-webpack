<template>
  <div class="body">
    <div class="title">
      <h2>Lista de Plantas</h2>
    </div>

    <br />
    <br />
    <br />
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="8"></b-col>
        <b-col cols="4">
          <button class="button-36" role="button" @click="newFlower">Novo</button></b-col
        >
      </b-row>
    </b-container>

    <br />
    <br />
    <br />

    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center Table-header">
        <b-col cols="2"> #ID </b-col>
        <b-col cols="5"> Nome </b-col>
        <b-col cols="3"> Nome cliente </b-col>
        <b-col cols="2"> Ações</b-col>
      </b-row>

      <b-row
        class="justify-content-md-center Table-body"
        v-for="item in flowers"
      >
        <!-- id -->
        <b-col cols="2">
          {{ item.id }}
        </b-col>
        <b-col cols="5">
          {{ item.name }}
        </b-col>
        <b-col cols="3">
          {{ item.authors }}
        </b-col>
        <b-col cols="2">
          {{ item.authors }}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Panel from "../components/shared/Panel.vue";
import Image from "../components/shared/Image.vue";

export default {
  components: {
    "panel": Panel,
    "first-image": Image
  },

  data() {
    return {
      titulo: "Lista",
      flowers: [],
      newF: {
    "id": 4,
    "name": "Hortelã",
    "authors": "Mentha spicata",
    "description": "A hortelã comum, conhecida cientificamente como Mentha spicata, é uma planta medicinal e aromática, com propriedades que ajudam a tratar problemas digestivos, como má digestão, enjoo ou vômitos, por exemplo, e também tem efeitos calmantes e expectorantes.",
    "use": "Mentha spicata",
    "img": "https://www.gamespot.com/a/uploads/original/3/37852/3991061-stalker.jpg"
}
    };
  },

  created() {
    this.$http
      .get("http://localhost:3001/flowers")
      .then(res => res.json())
      .then(flowers => (this.flowers = flowers));
  },


  methods: {
    newFlower(){
      this.$http
      .post("http://localhost:3001/flowers", this.newF)
      .then(response => {
        console.log(response);
        }, response => {
        console.log(response);
        });
  }
}
};


</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.body {
  margin: 0px;
  padding: 0px;
  font-family: "Quicksand";
}
.title {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: fixed;
  width: 100%;
}
.Table-header {
  display: flex;
  font-weight: bold;
  text-align: center;
}

.Table-body {
  display: flex;
  font-weight: normal;
  text-align: center;
}

/* CSS */
.button-36 {
  background-image: linear-gradient(
    92.88deg,
    #49c163 9.16%,
    #40cd33 43.89%,
    #07ea1a 64.72%
  );
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI", "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  float: right;
}

.button-36:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}

@media (min-width: 768px) {
  .button-36 {
    padding: 0 2.6rem;
  }
}
</style>
