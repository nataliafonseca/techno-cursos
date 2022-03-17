<template>
  <div id="app">
    <header-component />
    <router-view class="container" />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: { HeaderComponent },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #234;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: inherit;
}

button {
  cursor: pointer;
  font-family: inherit;
}

img {
  max-width: 100%;
  height: auto;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.content {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 30px;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all 0.3s;
}

@media screen and (max-width: 800px) {
  .content {
    display: block;
  }
}
</style>
