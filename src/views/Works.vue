<template>
  <div class="works">
    <a href="#" v-scroll-to="'#top'" v-show="position > 200" class="scroll-btn">up</a>
    <div class="h1-works">
    </div>
    <div class="container">
    <transition name="slide-fade" mode="out-in" :css="false">
    <router-view/>
    </transition>
      {{ GetCurrentPath() }}
      <div class="pre-arrow" v-show="show" @click="PreviousWork">＜</div>
      <div class="nxt-arrow" @click="NextWork">＞</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works',
  props: ["id"],
  data() {
    return {
      pagepath: '01',
      show: true,
      title: 'WORKS',
      position: 0
    }
  },
  mounted: function() {
    const h1Title = this.$el.querySelector('.h1-works')
    h1Title.innerHTML = this._splitText()
    window.addEventListener('scroll', () => {
        this.position = scrollY
    })
  },
  methods: {
    _splitText: function() {
      const charas = this.title.trim().split("")
      return charas.reduce((acc, curr) => {
        return `${acc}<span class="chara">${curr}</span>`
      }, "")
    },
    GetCurrentPath: function() {
      const currentpath = location.pathname.substr(9,2)
      this.pagepath = currentpath
      if(currentpath === '01') {
        this.show = false
      } else {
        this.show = true
      }
    },
    NextWork: function() {
      const nextpage = '0' + (Number(this.pagepath) + 1);
      this.$router.push(nextpage)
    },
    PreviousWork: function() {
      const previouspage = '0' + (Number(this.pagepath) - 1);
      this.$router.push(previouspage)
    }
  }

}

</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_animation.scss";

.works {
  width: 100%;
  height:  100%;
  margin: 0;
  position: absolute;
  top: 0;
}

.pre-arrow {
  cursor: pointer;
  position: fixed;
  top: 50%;
  left: 15px;
}

.nxt-arrow {
  cursor: pointer;
  position: fixed;
  top: 50%;
  right: 15px;
}

a.scroll-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  color: white;
  text-decoration: none;
  background-color: rgb(66, 185, 131, 0.6);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-position: -10px -8px;

}

.h1-works {
 @extend .h1-animation;

 & .invew {
   background-color: white;
 }
}

@keyframes fade-in {
  0% {
      opacity: 0;
      transform: translateX(50px);
  }
  100% {
      opacity: 1;
      transform: translateX(0);
  }
}

.container {
  position: absolute;
  top: 81px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
</style>
