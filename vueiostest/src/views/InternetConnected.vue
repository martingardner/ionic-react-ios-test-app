<template>
  <div class="ion-page">
    <ion-header></ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>Internet Connected</h1>
      <div>Internet Status {{ statusconnected }}</div>
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "InternetConnected",
  data() {
    return {
      statusconnected: null
    };
  },
  components: {
    Navigation
  },
  methods: {
    internetStatus() {
      navigator.onLine
        ? (this.statusconnected = true)
        : (this.statusconnected = false);
    }
  },
  created() {
    this.internetStatus();
  }
};
</script>