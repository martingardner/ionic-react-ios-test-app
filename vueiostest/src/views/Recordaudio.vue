<template>
  <div class="ion-page">
    <ion-header></ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>Record Audio</h1>

      <ion-button @click="recordaudio">Record</ion-button>
      <div v-if="errMessage">Error:{{ errMessage }}</div>
      <!--
      <input type="file" @click="recordaudio" accept="audio/*" capture id="recorder" />
      <audio id="player" controls></audio>
      -->
      <!--
      <div>recording status: {{ audioStatus }}</div>
      <div v-if="audioSuccess">success</div>
      <div v-if="audioError">{{ audioErrorMessage }}</div>
      -->
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
      errMessage: ""
    };
  },
  components: {
    Navigation
  },
  methods: {
    recordaudio(evt) {
      console.log("recordaudio", evt);
      console.log("navigator.mediaDevices", navigator.mediaDevices);
      if (navigator.mediaDevices.ondevicechange) {
        navigator.mediaDevices
          .getUserMedia({
            audio: true,
            video: false
          })
          .then(stream => {
            if (window.URL) {
              evt.target.srcObject = stream;
            } else {
              evt.target.src = stream;
            }
          });
      } else {
        this.errorMessage("no attached microphone");
      }
    },
    errorMessage(string) {
      console.log("errorMessage string", string);
      if (string === "clear") {
        this.errMessage = "";
      } else {
        this.errMessage = string;
      }
    }
  }
};
</script>

<!--
https://ionicframework.com/docs/enterprise/media
-->
