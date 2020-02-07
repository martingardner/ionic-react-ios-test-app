<template>
  <div>
    <ul>
      <li>
        <ion-item button @click="$router.push('/')">
          <ion-icon name="home"></ion-icon>
          <ion-label>
            <span>Home</span>
          </ion-label>
        </ion-item>
      </li>
      <li>
        <ion-item button @click="$router.push('/about')">
          <ion-icon name="home"></ion-icon>
          <ion-label>
            <span>About</span>
          </ion-label>
        </ion-item>
      </li>
      <li>
        <ion-item button @click="$router.push('/picture')">
          <ion-icon name="home"></ion-icon>
          <ion-label>
            <span>Picture</span>
          </ion-label>
        </ion-item>
      </li>
      <li>
        <ion-item button @click="$router.push('/geolocation')">
          <ion-icon name="home"></ion-icon>
          <ion-label>
            <span>Geolocation</span>
          </ion-label>
        </ion-item>
      </li>
      <li>
        <ion-item button @click="$router.push('/recordaudio')">
          <ion-icon name="home"></ion-icon>
          <ion-label>
            <span>Record Audio</span>
          </ion-label>
        </ion-item>
      </li>
      <li>
        <ion-item button @click="$router.push('/internetconnected')">
          <ion-icon name="home"></ion-icon>
          <ion-label>
            <span>Internet Connected</span>
          </ion-label>
        </ion-item>
      </li>
      <li>
        <ion-item button @click="$router.push('/barcodescanner')">
          <ion-icon name="home"></ion-icon>
          <ion-label>
            <span>Barcode Scanner</span>
          </ion-label>
        </ion-item>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style>
ul {
  list-item-image: none;
}

ul li {
  display: inline-block;
  margin-right: 5px;
}
</style>
