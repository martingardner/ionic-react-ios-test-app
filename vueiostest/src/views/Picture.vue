<template>
  <div class="ion-page">
    <ion-header></ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>Picture Page</h1>
      <div>
        <ion-button @click="takePicture">Take Picture</ion-button>
      </div>
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";

export default {
  name: "Picture",
  data() {
    return {};
  },
  methods: {
    takePicture: async () => {
      const image = await Plugins.Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });

      console.log("image", image);
    }
  },
  components: {
    Navigation
  }
};
</script>

<style></style>

<!--
https://stackoverflow.com/questions/54955426/how-to-use-async-await-in-vue-js
https://ionicframework.com/docs/native/camera
https://capacitor.ionicframework.com/docs/guides/ionic-framework-app/
-->
