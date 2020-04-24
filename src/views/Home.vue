<template>
  <div class="hero">
    <Navigation/>
    <div class="title-animation inview">                
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
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import { titleAnimation } from '../js/animation.js'

export default {
  name: 'Home',
  components: {
    Navigation
  },
  mounted:
  titleAnimation()
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
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
  color: #42b983;
}

.hero {
  width: 100vw;
  height:  100vh;
  background: linear-gradient(to right, #8e9eab, #eef2f3);

}
.title-animation {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  color: #3d576d;
  font-size: 48px;
  transform: rotate(90deg);
  transform-origin: left;
  letter-spacing: -1px;
  width: 80vh;
  opacity: 0;

  @include ss {
    width: 90vh;
  }

  @include pc {
    font-size: 70px;
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
  // position: fixed;
  // left: -148px;
  // top: 345px;
  // text-align: left;
  // line-height: 0.8em;
  

  // @include tab {
  // font-size: 5em;
  // left: -181px;
  // top: 383px;
  // }

  // @include pad {
  // font-size: 7em;
  // left: -435px;
  // top: 570px;
  // }

  // @include pc {
  //   font-size: 6em;
  //   left: -372px;
  //   top: 520px;  
  // }
  
  // @include sp {
  // left: -145px;
  // top: 356px;
  // }

  // @include ss {
  // top: 313px;
  // }  


}



</style>
