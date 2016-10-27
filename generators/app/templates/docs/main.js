import Vue from 'vue'
import app from './App.vue';

Vue.config.debug = true;

new Vue({
  el: 'body',
  components: { app },
});
