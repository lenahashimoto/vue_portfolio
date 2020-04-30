<template>
  <div class="observer">
  <div class="nav" :v-show="show"></div>
  </div>
</template>

<script>
export default {
  props: ['options'],
  data: () => ({
    observer: null,
    show: false
  }),
  mounted() {
    const options = this.options || {};
    // this.observer = new IntersectionObserver(([entry]) => {
    //   if (entry.isIntersecting) {
    //     this.$emit("intersect");
    //   }
    // }, options);
    // eslint-disable-next-line no-unused-vars
    const cb = function(entries, observer) {
        entries.forEach(entry => {
            
            if(entry.isIntersecting) {
                this.show = false;
                console.log(this.show);
                this.$emit("intersect");
            } else {
                this.show = true;
                console.log(this.show);
            }
        })
    // // ([entry]) => {
    // //     if (entry && entry.isIntersecting) {
    // //         this.$emit("intersect", this.toggle =!toggle);
    // //         console.log("intersecting")
    // //     }
    // //     }
    }
    this.observer = new IntersectionObserver(cb, options);

    this.observer.observe(this.$el);
  },

//   destroyed() {
//     this.observer.disconnect();
//   },
};
</script>
<style scoped lang="scss">

.nav {
    display: block;
    width: 100vw;
    height: 80px;
    background-color: #fff;
    position: fixed;
    top: 0;
}
</style>