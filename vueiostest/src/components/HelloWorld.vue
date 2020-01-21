<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <Navigation />
      <h1>HelloWorld Component</h1>
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "HelloWorld",
  components: {
    Navigation
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
