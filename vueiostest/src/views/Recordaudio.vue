<template>
  <div class="ion-page">
    <ion-header></ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>Record Audio</h1>
      <ion-button @click="recordaudio">Record</ion-button>
      <div v-if="captureError">{{ captureError }}</div>
      <div v-if="captureSuccess">success</div>
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

//import { MediaCapture } from "@ionic-native/media-capture";

export default {
  name: "Recordaudio",
  data() {
    return {
      captureError: null,
      captureSuccess: false
    };
  },
  components: {
    Navigation
  },
  methods: {
    recordaudio() {
      console.log("recordaudio");
      /*
      MediaCapture.captureAudio().then(res => {
        console.log("capture audio", res);
      });
      */

      navigator.device.capture.captureAudio(
        this.audioCaptureSuccess(),
        this.audioCaptureFailure()
      );
    },
    audioCaptureSuccess(data) {
      console.log("audioCaptureSuccess data", data);
      this.captureSuccess = true;
    },
    audioCaptureFailure(err) {
      this.captureError = err.code;
      this.captureSuccess = false;
    }
  }
};
</script>

<!--
cordova-plugin-media-capture
https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-media-capture/
-->
