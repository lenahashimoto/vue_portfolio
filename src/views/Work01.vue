<template>
  <div class="work-content">
    <div>{{ $route.params.id }}</div>
    this is Work_01
    <p>{{ number }}</p>
    <button @click="addnumber">+1</button>
  </div>
</template>

<script>
export default {
  name: 'Work01',
  props: ["id"],
  data() {
    return {
      msg: 'this is Work_01',
      number: 1
    }
  },
  created: function(){
    console.log(this.msg)
  },
  computed: {
  },
  methods: {
    addnumber: function() {
      return this.number += 1
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/_animation.scss";

.work-content {
  transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition-delay: 0.08s;

    @include animation(
        $name: slideup,
        $duration: 1.8s,
        $iteration-count: 1,
        $timing-function: ease-out,
        $fill-mode: both
    );

    @keyframes slideup {
      0% {
          transform: translateY(20%);
          opacity: 0;
      }
      100% {
          transform: translateY(0);
          opacity: 1;
      }
  }
}
</style>