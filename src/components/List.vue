<template>
  <div class="greetigs">
    
    <h1 class="title">{{ titulo }}</h1>

  <ul>
    <li v-for="flower in flowers">
      <panel :flower="flower">
        <first-image :url="flower.img"/>
      </panel>
    </li>
  </ul>

  </div>
  
</template>

<script>
import Panel from '../components/shared/Panel.vue'
import Image from '../components/shared/Image.vue'

export default {

components:{
  'panel': Panel,
  'first-image': Image
},


data() {
  return {
    titulo: "Lista",
    flowers:[],
  }
},



created() {
  this.$http
  .get('http://localhost:3000/flowers')
  .then(res => res.json())
  .then(flowers => this.flowers = flowers)
},

};

</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
