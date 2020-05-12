<template>
  <div id="app">
    <transition name="fadeout" appear>
      <Loader v-show="loading"/>
    </transition>
    <div>
      <div class="hero">
        <Navigation v-show="inview"></Navigation>
        <div class="title-animation inview" v-show="inview">                
          <span class="chara init-letter">L</span>
          <span class="chara">E</span>
          <span class="chara">N</span>
          <span class="chara">A</span>
          <span class="chara init-letter">H</span>
          <span class="chara">A</span>
          <span class="chara">S</span>
          <span class="chara">H</span>
          <span class="chara">I</span>
          <span class="chara">M</span>
          <span class="chara">O</span>
          <span class="chara">T</span>
          <span class="chara">O</span>
        </div>
      <vue-page-transition name="overlay-up-full" :css="false">  
      <router-view/>
      </vue-page-transition>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'

export default {
  name: 'App',
  components: {
    Loader
  },
 data() {
    return {
    loading: true,
    inview: false
    }
  },
  mounted() {
  setTimeout(() => {
      this.loading = false;
    }, 1000)
  setTimeout(() => {
      this.inview = true;
    }, 1800)
  }
}
</script>

<style scoped lang="scss">
@import "normalize-scss";
@import "@/scss/_animation.scss";

#app {
  font-family: 'Josefin Sans','Noto Sans JP', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $cText;
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $cText;

    &.router-link-exact-active {
      color: $cLink;
    }
  }
}
.hero {
  height:  100vh;
  background: linear-gradient(to right, $cBg1, $cBg2, $cBg3);
  background-size: 400% 400%;
  animation: bgAnimation 20s ease infinite;

  overflow: hidden;
}

@keyframes bgAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.title-animation {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  color: $cMain;
  font-size: 48px;
  transform: rotate(90deg);
  transform-origin: left;
  letter-spacing: -1px;
  width: 532px;
  opacity: 0;

  @include ss {
    width: 90vh;
  }

  @include tab {
    width: 57vh;
  }

  @include pad {
    font-size: 70px;
    width: 719px;
  }
    
    &.inview {
        opacity: 1;

        & .chara {
          display: inline-block;

          &.init-letter {
            font-weight: 400;
            font-size: 72px;

              @include pad {
                font-size: 96px;
              }  
          }

            @include animation(
                $name: fadein-up,
                $duration: 1.8s,
                $iteration-count: 1,
                $timing-function: ease-out,
                $fill-mode: both
            );

            @for $i from 1 through 13 {
                &:nth-child(#{$i}) {
                    animation-delay: $i * 0.08s;
                }
            }
        }         
    }
}

@keyframes fadein-up {
    0% {
        transform: translateY(-120%);
        opacity: 0;
    }
    100% {
        transform: translateY(-25%);
        opacity: 1;
    }
}

.fadeout-enter-active, .fadeout-leave-active {
  transition: all 0.8s ease;
  opacity: 1;
}

.fadeout-enter, .fadeout-leave-to {
  opacity: 0;
}

</style>
