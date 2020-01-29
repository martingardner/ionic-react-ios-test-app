<template>
  <div class="ion-page">
    <ion-header></ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>Record Audio</h1>
      <ion-button @click="recordaudio">Record</ion-button>
      <div>recording status: {{ audioStatus }}</div>
      <div v-if="audioSuccess">success</div>
      <div v-if="audioError">{{ audioErrorMessage }}</div>
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
      audioStatus: 0,
      audioError: false,
      audioSuccess: false,
      audioErrorMessage: null,
      audioRecorder: null
    };
  },
  components: {
    Navigation
  },
  methods: {
    recordaudio() {
      //console.log("recordaudio");
      /*
      MediaCapture.captureAudio().then(res => {
        console.log("capture audio", res);
      });
      */
      /*
      navigator.device.capture.captureAudio(
        this.audioCaptureSuccess(),
        this.audioCaptureFailure()
      );
      */
      this.mediaRecorder = new Media(
        "",
        this.audioCaptureSuccess(),
        this.audioCaptureFailure(),
        this.audioCaptureStatus()
      );
    },
    audioCaptureSuccess(data) {
      //console.log("audioCaptureSuccess data", data);
      this.audioSuccess = true;
      this.audioFailure = false;
    },
    audioCaptureFailure(err) {
      this.audioSuccess = false;
      this.audioFailure = true;
      this.audioErrorMessage = err;
    },
    audioCaptureStatus(status) {
      this.audioStatus = status;
    }
  }
};
</script>

<!--
cordova-plugin-media-capture
https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-media-capture/
-->
