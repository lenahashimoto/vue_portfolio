<template>
  <div class="works">
    <div class="h1-works">
    </div>
    <div class="container">
    {{ GetCurrentPath() }}
    <button v-show="show" @click="PreviousWork">PREVIOUS</button>
    <button @click="NextWork">NEXT</button>
    <transition name="slide-fade" mode="out-in" :css="false">
    <router-view/>
    </transition>
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
      title: 'WORKS'
    }
  },
  mounted: function() {
    const h1Title = this.$el.querySelector('.h1-works')
    h1Title.innerHTML = this._splitText()
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
    console.log(this.pagepath)
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

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_animation.scss";

.works {
  width: 100vw;
  height:  100vh;
  margin: 0;
  position: fixed;
  top: 0;
}

.h1-works {
 @extend .h1-animation;  
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
  top: 100px;
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
