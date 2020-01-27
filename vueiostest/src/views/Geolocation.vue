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
      spd: 0
    };
  },
  components: {
    Navigation
  },
  methods: {
    geolocation() {
      let $data = this;
<<<<<<< HEAD
      let $active = false;
      //console.log("$active", $active);
=======
>>>>>>> 62fcb94d8f8bae422f31c34a620af0140de660d5
      async function getCoords() {
        const coordinates = await Geolocation.getCurrentPosition();

        //console.log("Current", coordinates);
        //console.log("Current coords", coordinates.coords);
        //console.log("latitude", coordinates.coords.latitude);
        //console.log("current data latitude", $data.lat);
<<<<<<< HEAD
        //console.log("after async $active", $active);
=======
>>>>>>> 62fcb94d8f8bae422f31c34a620af0140de660d5

        $data.lat = coordinates.coords.latitude;
        $data.lng = coordinates.coords.longitude;
        $data.spd = coordinates.coords.speed || 0;
      }

      getCoords();
    },
    geolocationWatch() {
      navigator.geolocation.watchPosition(
        this.geolocationWatchData,
        this.watchError,
        {
          enableHighAccuracy: true,
          timeout: 1000,
          maximumAge: 0
        }
      );
<<<<<<< HEAD

      this.watchId = id;
      //console.log("hit");
=======
    },
    geolocationWatchData(data) {
      //console.log("geolocationWatch Data", data);
      this.lat = data.coords.latitude;
      this.lng = data.coords.longitude;
      this.spd = data.coords.speed || 0;
>>>>>>> 62fcb94d8f8bae422f31c34a620af0140de660d5
    },
    watchError(err) {
      //console.log("err", err);
      this.watchErr = err.message;
    }
  },
  created() {
<<<<<<< HEAD
    //console.log("created");
=======
>>>>>>> 62fcb94d8f8bae422f31c34a620af0140de660d5
    //this.geolocation();
    this.geolocationWatch();
  }
};
</script>

<!--
https://capacitor.ionicframework.com/docs/apis/geolocation/#example
-->
