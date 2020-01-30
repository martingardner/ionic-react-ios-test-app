import Vue from "vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Picture from "@/views/Picture.vue";
import Geolocation from "@/views/Geolocation.vue";
import Recordaudio from "@/views/Recordaudio.vue";
import InternetConnected from "@/views/InternetConnected.vue";
import { IonicVueRouter } from "@ionic/vue";

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/picture",
      name: "picture",
      component: Picture
    },
    {
      path: "/geolocation",
      name: "geolocation",
      component: Geolocation
    },
    {
      path: "/recordaudio",
      name: "recordaudio",
      component: Recordaudio
    },
    {
      path: "/internetconnected",
      name: "internetconnected",
      component: InternetConnected
    }
  ]
});
