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
          <button class="button-36" role="button" @click="close">
            Novo
          </button></b-col
        >
      </b-row>
    </b-container>

    <div v-show="createFlower">
      <div>
        <label>Nome da plantaa</label>
        <input type="text" v-model="newF.name" />

        <label>Nome Cient</label>
        <input type="text" v-model="newF.authors" />

        <label>Descrição</label>
        <input type="text" v-model="newF.description" />

        <label>Uso da planta</label>
        <input type="text" v-model="newF.use" />

        <label>Link da imagem</label>
        <input type="text" v-model="newF.img" />

        <button class="btn-primary w-100" @click="addItem()">Salvar</button>
        <button class="btn-primary w-100" @click="close">Cancelar</button>
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
          <button type="button" class="btn cor-view" @click="remove(item)">
            Visualizar
          </button>
        </b-col>
      </b-row>
    </b-container>

    <router-link to="/view">oi
    </router-link>
  </div>
</template>

<script>
import Image from "../shared/Image.vue";
import View from "../View/View.vue";
import api from "../../../service/api";

export default {
  components: {
    "first-image": Image,
    "view": View
  },

  data() {
    return {
      titulo: "Lista",
      createFlower: false,
      flowers: [],
      newF: {
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
        name: this.newF.name,
        authors: this.newF.authors,
        description: this.newF.description,
        use: this.newF.use,
        img: this.newF.img
      });
      this.flowers = [...this.flowers, res.data];
      this.createFlower = !this.createFlower;
    },

    close() {
      (this.newF.name = ""),
        (this.newF.authors = ""),
        (this.newF.description = ""),
        (this.newF.use = ""),
        (this.newF.img = ""),
        (this.createFlower = !this.createFlower);
    },

    removeItem(id) {
      api.delete(`/flowers/${id}`);
      this.flowers = this.flowers.filter(flowers => flowers.id !== id);
    },

    remove(flower) {
      alert("Remover a foto, " + flower.name);
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
