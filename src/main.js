import { createApp } from 'vue';

import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue"

createApp(App).mount('#app');

App.component("FriendContact", FriendContact);

App.mount("#app")