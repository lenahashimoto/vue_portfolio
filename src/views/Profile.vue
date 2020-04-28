<template>
  <div class="profile">
    <div class="h1-profile">
    </div>
    <ScrollContainer/>
  </div>
</template>

<script>
import ScrollContainer from '@/components/ScrollContainer.vue'

export default {
  name: 'Profile',
  components: {
    ScrollContainer
  },
  data() {
    return {
      title: 'PROFILE'
    }
  },
  mounted: function() {
    const h1Title = this.$el.querySelector('.h1-profile')
    h1Title.innerHTML = this._splitText()
  },
  methods: {
      _splitText: function() {
      const charas = this.title.trim().split("")
      return charas.reduce((acc, curr) => {
        return `${acc}<span class="chara">${curr}</span>`
      }, "")
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_animation.scss";

.h1-profile {
  @extend .h1-animation;

  & .chara {
        @for $i from 1 through 7 {
            &:nth-child(#{$i}) {
                animation-delay: $i * 0.2s;
            }
        }
    }  
}

.scrollcontainer {
    height: 80vh;
    width: 80vw;
    overflow: hidden;
    top:5vh;
    left:0;
    transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition-delay: 2s;

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
  margin: 0;
  position: fixed;
  top: 0;

  > h1 {
    margin: 0;
    padding: 20px;
  }
}

</style>
