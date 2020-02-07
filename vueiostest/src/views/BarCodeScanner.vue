<template>
  <div class="ion-page">
    <ion-header></ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>BarCode Scanner</h1>
      <ion-button @click="scan">scan</ion-button>
      <div class="scan-results" v-if="scanStatus">
        <div>canceled: {{ scanResults.canceled }}</div>
        <div>text: {{ scanResults.text }}</div>
        <div>format: {{ scanResults.format }}</div>
      </div>
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "BarCodeScanner",
  data() {
    return {
      scanStatus: false,
      scanResults: {
        canceled: null,
        text: null,
        format: null
      }
    };
  },
  methods: {
    scan() {
      try {
        window.cordova.plugins.barcodeScanner.scan(
          result => this.scanSuccess(result),
          error => this.scanFailure(error)
        );
      } catch (e) {
        console.log("scanner error", e);
      }
    },
    scanSuccess(result) {
      console.log("success", result);
      this.scanSuccess = true;
      this.scanResults = result;
      //this.scanResults.canceled = result.canceled;
      //this.scanResults.text = result.text;
      //this.scanResults.format = result.format;
    },
    scanFailure(error) {
      this.scanSuccess = false;
      console.log("scanFailure", error);
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

on an ios app, this has given me back a result.  Don't know what the results tell me, but
sample success result 
{
    cancelled: 0,
    text: "B07QF732FQ",
    format: "CODE_128"
}
-->
