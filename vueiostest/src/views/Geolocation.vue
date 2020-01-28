<template>
  <div class="ion-page">
    <ion-header></ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>Geolocation</h1>
      <div class="coordinates">
        <div>lat: {{ lat }}</div>
        <div>long: {{ lng }}</div>
        <div>speed: {{ spd }}</div>
        <div v-if="this.watchErr">{{ watchErr }}</div>
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
      lng: 0,
      spd: 0,
      watchErr: null
    };
  },
  components: {
    Navigation
  },
  methods: {
    geolocation() {
      let $data = this;

      async function getCoords() {
        const coordinates = await Geolocation.getCurrentPosition();

        //console.log("Current", coordinates);
        //console.log("Current coords", coordinates.coords);
        //console.log("latitude", coordinates.coords.latitude);
        //console.log("current data latitude", $data.lat);

        $data.lat = coordinates.coords.latitude;
        $data.lng = coordinates.coords.longitude;
        $data.spd = coordinates.coords.speed || 0;
      }

      getCoords();
    },
    geolocationWatch() {
      const options = {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
      };

      /*
      navigator.geolocation.watchPosition(
        this.geolocationWatchData,
        this.watchError,
        options
      );
*/
      Geolocation.watchPosition(
        options,
        this.geolocationWatchData,
        this.watchError
      );
    },
    geolocationWatchData(data) {
      //console.log("geolocationWatch Data", data);
      this.lat = data.coords.latitude;
      this.lng = data.coords.longitude;
      this.spd = data.coords.speed || 0;
    },
    watchError(err) {
      //console.log("err", err);
      this.watchErr = err.message;
    }
  },
  created() {
    this.geolocationWatch();
    //this.geolocation();
  }
};
</script>

<!--
https://capacitor.ionicframework.com/docs/apis/geolocation/#example
-->
