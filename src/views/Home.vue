<template>
  <div class="home">
    <HelloWorld/>
    <Navigation/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Navigation
  }
}
</script>
