<template>
  <div class="body">
    <div class="title">
      <h2>Gerenciar Planta</h2>
    </div>

    <br />
    <br />
    <br />

    <div class="form__group field">
      <input
        type="input"
        class="form__field"
        placeholder="Name"
        name="name"
        id="name"
        required
      />
      <label for="name" class="form__label">Name</label>
    </div>
  </div>
</template>

<script>
import Panel from "./shared/Panel.vue";
import Image from "./shared/Image.vue";

export default {
  data() {
    return {
      titulo: "Lista",
      flowers: [],
      name: "",
      autor: "",
      description: "",
      use: "",
      img: ""
    };
  },

  methods: {
    async addFlower() {}
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

</style>

