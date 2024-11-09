import { createApp } from 'vue';
import App from './components/LoveHeart.vue';
import LoveHeart from './components/LoveHeart.vue';

createApp(App)
  .component('LoveHeart', LoveHeart)
  .mount('#app');
