<template>
  <header>
    <div id="app">
      <List msg="Flowers" />
    </div>
  </header>
</template>

<script>
import { routes } from './routes';
import List from "./components/List/List.vue";

export default {
  name: "App",
  components: {
    List
  },
  data() {
    return {
      routes
    }
  }
};
</script>

<style scoped>

</style>
