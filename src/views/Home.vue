<template>
  <div class="h-container">
    <WorksSwiper/>
    <div class="scroll-arrow-left" v-show="isActive"></div>
    <div class="scroll-arrow-right" v-show="!isActive"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import WorksSwiper from '@/components/WorksSwiper.vue'

export default {
  name: 'Home',
  components: {
    WorksSwiper
  },
  data() {
    return {
      isActive: true
    }
  },
  mounted() {
    const start = this.$parent.$el.querySelector(".swiper-wrapper .swiper-slide:first-child")
    const startObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if(mutation.target.classList.contains('swiper-slide-active')) {
          this.isActive = true
              }            
          })
    })
    const end = this.$parent.$el.querySelector(".swiper-wrapper .swiper-slide:last-child")
    const endObserver = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
              if(mutation.target.classList.contains('swiper-slide-active')) {
                this.isActive = false
              }            
          })
    })
    const config = {
      attributes: true,
      attributeFilter: ["class", "style"]
    }
    startObserver.observe(start, config);
    endObserver.observe(end, config);
  }
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_swiper.scss";
@import "@/scss/_animation.scss";

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
  color: $cLink;
}

.h-container {
  position: relative;
  width: 90vw;
  height: 80vh;
  left: 50px;
  z-index: 1;
  opacity: 1;
  animation-delay: 1.8s;

  @include animation(
      $name: fadein-up,
      $duration: 1.8s,
      $iteration-count: 1,
      $timing-function: ease-out,
      $fill-mode: both
  );     
}

@keyframes fadein-up {
    0% {
        transform: translateX(10%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.scroll-arrow-left {
  position: absolute;
  bottom: 15%;
  right: 22%;

  @include pad {
    top: 600px;
    right: 10%;
  }

  @include animation(
        $name: go-left,
        $duration: 0.8s,
        $timing-function: ease-out,
        $fill-mode: both
    );

    @keyframes go-left {
      0%, 100% {
          transform: translateX(20%);
          opacity: 0.5;
      }
      50% {
          transform: translateX(0);
          opacity: 1;
      } 
  }

    &::before {
      content: "";
      border-top: 1px solid $cMain;
      transform: rotate(135deg);
      position: relative;
      top: 4px;
      display: block;
      left: -1px;
      width: 10px;
    }

  &::after {
    content: '';
    border-bottom: 1px solid $cMain;
    position: relative;
    top: 6px;
    display: block;
    width: 50px;
  }
}

.scroll-arrow-right {
  @extend .scroll-arrow-left;

  @include animation(
        $name: go-left,
        $duration: 0.8s,
        $timing-function: ease-out,
        $fill-mode: both
    );

    @keyframes go-left {
      0%, 100% {
          transform: translateX(20%);
          opacity: 0.5;
      }
      50% {
          transform: translateX(0);
          opacity: 1;
      } 
  }

    &::before {
      content: "";
      transform: rotate(-135deg);
      left: 43px;
    }
}


.swp-image {
  width: 350px;
  height: 450px;
  object-fit: cover;
  object-position: 0 0;
}

.swp-title {
  font-family: 'Josefin Sans', 'Noto sans JP', sans-serif;
  font-weight: 400;
  color: $cText;
  font-size: 1.2em;
  position: absolute;
  top: 0;
  left: 0;
}

.swp-subtitle {
  @extend .swp-title;
  font-size: 0.35em;
  font-weight: 300;
  position: absolute;
  top: 10%;
  left: 20%;
  text-align: left;
}
</style>
