<template>
  <div class="works">
    <h1>works</h1>
    <router-link :to="{ name: 'index', params: { id: 1 }}">index</router-link>
    <router-link :to="{ name: 'works-01', params: { id: 1 }}">work01</router-link>
    <router-link :to="{ name: 'works-02', params: { id: 1 }}">work02</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Works',
  props: ["id"]
}
</script>
