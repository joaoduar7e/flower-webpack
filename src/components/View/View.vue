<template>
  <div>
    {{ flower.id }}
    {{ flower.name }}
    {{ flower.authors }}
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

<style scoped></style>
