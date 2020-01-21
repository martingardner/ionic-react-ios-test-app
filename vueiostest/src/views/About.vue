<template>
  <div class="ion-page">
    <ion-header> </ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>About Page</h1>
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "About",
  components: {
    Navigation
  }
};
</script>
