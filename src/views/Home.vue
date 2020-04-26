<template>
  <div class="container">
    <WorksSwiper/>
  </div>
</template>

<script>
// @ is an alias to /src
import WorksSwiper from '@/components/WorksSwiper.vue'

export default {
  name: 'Home',
  components: {
    WorksSwiper
  }
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_swiper.scss";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 20px 10px;
}
a {
  color: #42b983;
}

.title {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  color: #3d576d;
  font-size: 5em;
  transform: rotate(90deg);
  transform-origin: left;
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 3px;
}

.container {
  position: relative;
  width: 90vw;
  height: 80vh;
  left: 50px;
}
</style>
