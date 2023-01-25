import Vue from 'vue';
import VueRouter from 'vue-router';
import List from './components/List/List.vue';
import View from './components/View/View.vue';
Vue.use(VueRouter)

const routes = [
    //Caso seja vazio carregue o component List 
    { path: '/', component: List, name: 'List'},
    //Caso passe o /view carregue o component view
    { path: '/view', component: View, name: 'View'},
];

export default new VueRouter({
    mode: "history",
    routes
})