import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.config.productionTip = false

import Home from './pages/Home.vue';
import Agreement from './pages/Agreement.vue';
import Instruction from './pages/Instruction.vue';
import Rules from './pages/Rules.vue';


const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/agreement',
            name: 'agreement',
            component: Agreement
        },
        {
            path: '/instruction',
            name: 'instruction',
            component: Instruction
        },
        {
            path: '/rules',
            name: 'rules',
            component: Rules
        }
    ]
});



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
