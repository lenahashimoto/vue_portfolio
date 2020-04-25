<template>
<div class="profile">
    <h1>profile</h1>
    <ScrollContainer/>
  </div>
</template>

<script>
import ScrollContainer from '@/components/ScrollContainer.vue'

export default {
  name: 'Profile',
  components: {
    ScrollContainer
  }
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_animation.scss";

.scrollcontainer {
    height: 80vh;
    width: 80vw;
    overflow: hidden;
    top:5vh;
    left:0;
    

  .swiper-slide {
    height: auto;
    font-size: 1em;
    background: transparent;
    border: none;

    &.text {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 50px 30px 10px;

      > .content {
        > .fullname, .name-eng {
          margin: 0;
          text-align: center;
          font-size: 1.2em;
          margin-bottom: .75em;
        }

        > p {
          line-height: 2;
          text-indent: 2em;
        }
      }
    }

  }
}


.profile {
  width: 100vw;
  height:  100vh;
  background: linear-gradient(to right, #8e9eab, #eef2f3);
  margin: 0;

  > h1 {
    margin: 0;
    padding: 20px;
  }
}

</style>
