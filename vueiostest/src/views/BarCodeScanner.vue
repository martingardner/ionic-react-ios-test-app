<template>
  <div class="ion-page">
    <ion-header></ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>BarCode Scanner</h1>
      <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded">
      </StreamBarcodeReader>
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  name: "BarCodeScanner",
  methods: {
    onLoaded(response) {
      console.log("onLoaded", response);
    },
    onDecode(response) {
      console.log("onDecode", response);
    }
  },
  components: {
    Navigation,
    StreamBarcodeReader
  }
};
</script>

<!--
https://www.npmjs.com/package/vue-barcode-reader
-->
