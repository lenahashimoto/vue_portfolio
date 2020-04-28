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

.profile {
  width: 100vw;
  height:  100vh;
  margin: 0;
  position: fixed;
  top: 0;
  padding-left: 10px;

  > h1 {
    margin: 0;
    padding: 20px;
  }
}

</style>
