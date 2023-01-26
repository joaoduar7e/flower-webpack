<template>
  <div class="body">
    <div class="title">
      <h2>Lista de Plantas</h2>
    </div>

    <br />
    <br />
    <br />

    <b-container v-show="!createFlower" class="bv-example-row">
      <b-row>
        <b-col cols="8"></b-col>
        <b-col cols="4">
          <button
            class="button-59"
            style="float: right;"
            role="button"
            @click="close"
          >
            Novo
          </button></b-col
        >
      </b-row>
    </b-container>

    <div v-show="createFlower">
      <div class="forms">
        <div class="group">
          <input type="text" v-model="flower.name" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Nome da planta</label>
        </div>

        <div class="group">
          <input type="text" v-model="flower.authors" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Nome científico</label>
        </div>

        <div class="group">
          <input type="text" v-model="flower.description" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Sobre a planta</label>
        </div>

        <div class="group">
          <input type="text" v-model="flower.use" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Uso da planta</label>
        </div>

        <div class="group">
          <input type="text" v-model="flower.img" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Url da imagem</label>
        </div>
      </div>

      <div class="div-buttons">
        <button class="button-59" @click="close">Cancelar</button>
        <button class="button-59" @click="addItem()">Salvar</button>
      </div>
    </div>

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
          <button type="button" class="btn" @click="removeItem(item.id)">
            Delete
          </button>
          <button type="button" class="btn cor-editar" @click="remove(item)">
            Editar
          </button>
          <router-link :to="`/view/${item.id}`">
            <button type="button" class="btn cor-view">
              Visualizar
            </button>
          </router-link>
          <button
            type="button"
            class="btn cor-editar"
            @click="copyLink(item.id)"
          >
            Copiar
          </button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Image from "../shared/Image.vue";
import View from "../View/View.vue";
import api from "../../../service/api";

export default {
  components: {
    "first-image": Image,
    view: View
  },

  data() {
    return {
      titulo: "Lista",
      createFlower: false,
      editIndex: -1,
      flowers: [],
      flower: {
        id: 0,
        name: "",
        authors: "",
        description: "",
        use: "",
        img: ""
      }
    };
  },

  created() {
    this.getFlower();
  },

  methods: {
    getFlower() {
      api
        .get("/flowers")
        .then(res => {
          this.flowers = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    addItem() {
      const res = api.post(`/flowers`, {
        id: 0,
        name: this.flower.name,
        authors: this.flower.authors,
        description: this.flower.description,
        use: this.flower.use,
        img: this.flower.img
      });
      this.flowers = [...this.flowers, res.data];
      this.createFlower = !this.createFlower;
    },

    close() {
      (this.flower.name = ""),
        (this.flower.authors = ""),
        (this.flower.description = ""),
        (this.flower.use = ""),
        (this.flower.img = ""),
        (this.createFlower = !this.createFlower);
    },

    removeItem(id) {
      api.delete(`/flowers/${id}`);
      this.flowers = this.flowers.filter(flowers => flowers.id !== id);
    },

    copyLink(item) {
      const el = document.createElement("textarea");
      el.value = "http://localhost:8080/view/" + item;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },

    edit(flower) {
      this.flower = Object.assign({}, this.flower);
      this.editIndex = this.flowers.indexOf(
        this.flowers.find(u => u.id === this.flower.id)
      );
      this.dialog = true;
    },

    remove(flower) {
      console.log("oi");
    }
  }
};
</script>

<style scoped>
@import url("../../assets/styles/input.css");
@import url("../../assets/styles/button.css");

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

.btn {
  border-radius: none;
  color: red;
}

.cor-editar {
  color: green;
}
.cor-view {
  color: blue;
}
/* CSS */

.forms {
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 800px;
  justify-content: center;
  margin: 0 auto;
}
</style>
