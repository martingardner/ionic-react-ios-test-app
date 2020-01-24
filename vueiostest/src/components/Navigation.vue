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
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
