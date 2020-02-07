<template>
  <div class="ion-page">
    <ion-header></ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>BarCode Scanner</h1>
      <ion-button @click="scan">scan</ion-button>
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "BarCodeScanner",
  methods: {
    scan() {
      try {
        window.cordova.plugins.barcodeScanner.scan(
          result => console.log("success", result),
          error => console.log("scan failed", error)
        );
      } catch (e) {
        console.log("scanner error", e);
      }
    }
  },
  components: {
    Navigation
  }
};
</script>

<!--
https://medium.com/better-programming/mobile-development-w-vuejs-and-ionic-capacitor-plugins-cb86474c01b1
https://github.com/phonegap/phonegap-plugin-barcodescanner
-->
