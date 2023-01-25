import List from './components/List/List.vue';
import View from './components/View/View.vue';

export const routes = [
    //Caso seja vazio carregue o component List 
    { path: '/', component: List, titulo: 'List'},
    //Caso passe o /view carregue o component view
    { path: '/view', component: View, titulo: 'View'},
];