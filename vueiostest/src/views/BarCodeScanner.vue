<template>
  <div class="ion-page">
    <ion-header></ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>BarCode Scanner</h1>
      <button @click="scan">Scan</button>
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "BarCodeScanner",
  methods: {
    scan() {
      console.log("scan hit");
    }
  },
  components: {
    Navigation
  }
};
</script>
