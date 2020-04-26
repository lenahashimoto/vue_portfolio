<template>
  <div id="app">
    <div class="hero">
      <Navigation></Navigation>
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
    <router-view/>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
@import "normalize-scss";
@import "@/scss/_animation.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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

  @include pad {
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



</style>
