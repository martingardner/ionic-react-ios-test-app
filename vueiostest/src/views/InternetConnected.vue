<template>
  <div class="ion-page">
    <ion-header></ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>Internet Connected</h1>
      <div>Internet Status {{ online }}</div>
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "InternetConnected",
  data() {
    return {
      //statusconnected: null
      online: navigator.onLine
    };
  },
  components: {
    Navigation
  },
  methods: {
    internetStatus() {
      this.online = navigator.onLine;
      this.$emit(this.online ? "online" : "offline");
    }
  },
  mounted() {
    window.addEventListener("online", this.internetStatus);
    window.addEventListener("offline", this.internetStatus);
  },
  beforeDestroy() {
    window.removeEventListener("online", this.internetStatus);
    window.removeEventListener("offline", this.internetStatus);
  }
};
</script>