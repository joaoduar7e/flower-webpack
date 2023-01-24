<template>
  <header>
    <div id="app">
      <List msg="Flowers" />
    </div>
  </header>
</template>

<script>
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    List
  }
};
</script>

<style scoped>

</style>
