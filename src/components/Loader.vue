<template>
<div class="loading-bg">
  <div class="lines">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped lang="scss">
@import "@/scss/_animation.scss";

.loading-bg {
  height: 100vh;
  position: relative;
}

.lines {
  position: absolute;
  top: 45%;
  left: 45%;
  margin: 0 auto;
  display: inline-block;
  width: 40px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @include tab {
    left: 47%;
  }
    

    & div {
        width: 6px;
        height: 15px;
        background-color: $cMain;
        @include animation(
            $name: canon,
            $duration: 0.8s,
            $timing-function: ease
        );

        @for $i from 1 through 5 {
            &:nth-child(#{$i}) {
                animation-delay: 0.1s * $i;
            }
        }
    }
}

@keyframes canon {
    0% {
        transform: scaleY(1);
    }
    25% {
        transform: scaleY(2);
    }
    50%,
    100% {
        transform: scaleY(1);
    }
}


</style>
