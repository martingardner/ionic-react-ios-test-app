<template>
  <div class="ion-page">
    <ion-header></ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>Geolocation</h1>
      <div class="coordinates">
        <div>lat: {{ lat }}</div>
        <div>long: {{ lng }}</div>
      </div>
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import { Plugins } from "@capacitor/core";

const { Geolocation } = Plugins;

export default {
  name: "Geolocation",
  data() {
    return {
      lat: 0,
      lng: 0
    };
  },
  components: {
    Navigation
  },
  methods: {
    geolocation: async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log("Current", coordinates);
      console.log("Current coords", coordinates.coords);
      console.log('latitude', coordinates.coords.latitude);
      console.log('current data latitude', this.lat);
    }
  },
  created() {
    console.log("created");
    this.geolocation();
  }
};
</script>

<!--
https://capacitor.ionicframework.com/docs/apis/geolocation/#example
-->
