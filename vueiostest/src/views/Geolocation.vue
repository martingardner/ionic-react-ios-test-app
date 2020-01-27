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
        <div v-if="this.watchErr">watchPosition error: {{ watchErr }}</div>
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
      watchErr: "",
      watchId: null
    };
  },
  components: {
    Navigation
  },
  methods: {
    geolocation() {
      let $data = this;
      let $active = false;
      //console.log("$active", $active);
      async function getCoords() {
        $active = true;
        const coordinates = await Geolocation.getCurrentPosition();

        //console.log("Current", coordinates);
        //console.log("Current coords", coordinates.coords);
        //console.log("latitude", coordinates.coords.latitude);
        //console.log("current data latitude", $data.lat);
        //console.log("after async $active", $active);

        $data.lat = coordinates.coords.latitude;
        $data.lng = coordinates.coords.longitude;
        $data.spd = coordinates.coords.speed || 0;
        $active = false;
      }
      if (!$active) {
        getCoords();
      }
    },
    geolocationWatch() {
      let id = navigator.geolocation.watchPosition(
        this.geolocation,
        this.watchError,
        {
          enableHighAccuracy: true,
          timeout: 1000,
          maximumAge: 0
        }
      );

      this.watchId = id;
      //console.log("hit");
    },
    watchError(err) {
      //console.log("err", err);
      this.watchErr = err.message;
    }
  },
  created() {
    //console.log("created");
    //this.geolocation();
    this.geolocationWatch();
    //this.geolocationWatch();
  }
};
</script>

<!--
https://capacitor.ionicframework.com/docs/apis/geolocation/#example
-->
