<template>
  <div id="app">
    <Activities/>
  </div>
</template>

<script>
import Activities from "./components/Activities.vue";

export default {
  name: "app",
  components: {
    Activities
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

body {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: flex-start;
}
body,
html {
  margin: 0;
  height: 100%;
}
#app {
  width: 50%;
}
</style>
