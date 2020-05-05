<template>
  <div class="works">
    <a href="#" v-scroll-to="'#top'" v-show="position > 200" class="scroll-btn"><span>up</span></a>
    <div class="h1-works">
    </div>
    <div class="work-container">
      <span v-bind:class="{ 'page-transition': isActive }"></span>
    <router-view/>
      {{ GetCurrentPath() }}
      <div class="pre-arrow" v-scroll-to="'#top'" v-show="show" @click="PreviousWork"></div>
      <div class="nxt-arrow" v-scroll-to="'#top'" v-show="show2" @click="NextWork"></div>
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
      show2: true,
      title: 'WORKS',
      position: 0,
      isActive: false
    }
  },
  mounted() {
    const h1Title = this.$el.querySelector('.h1-works')
    h1Title.innerHTML = this._splitText()
    window.addEventListener('scroll', () => {
        this.position = scrollY
    })
    const btnPrv = this.$el.querySelector('.pre-arrow')
    const btnNxt = this.$el.querySelector('.nxt-arrow')
    btnPrv.addEventListener('touchstart', () => {
      btnPrv.classList.add('hover')
    }, false)
    btnNxt.addEventListener('touchstart', () => {
      btnNxt.classList.add('hover')
    }, false)
  },
  methods: {
    _splitText: function() {
      const charas = this.title.trim().split("")
      return charas.reduce((acc, curr) => {
        return `${acc}<span class="chara">${curr}</span>`
      }, "")
    },
    GetCurrentPath: function() { 
      const currentpath = window.location.pathname.substr(9,2)
      this.pagepath = currentpath
      if(currentpath === '01') {
        this.show = false
      } else {
        this.show = true
      }
      if(currentpath === '06') {
        this.show2 = false
      } else {
        this.show2 = true
      }      
    },
    NextWork: function() {
      const nextpage = '0' + (Number(this.pagepath) + 1)
      this.isActive = true
      this.$router.push(nextpage)
      setTimeout(this.RemoveTransition, 2000)
    },
    PreviousWork: function() {
      const previouspage = '0' + (Number(this.pagepath) - 1)
      this.isActive = true
      setTimeout(this.$router.push(previouspage), 1000)
      setTimeout(this.RemoveTransition, 2000)
    },
    RemoveTransition: function() {
      this.isActive = false
    }
  }

}

</script>

<style lang="scss">
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
  left: 10px;
  width: 20px;
  height: 40px;
  transform: translateX(10%);
  transition: all 0.5s cubic-bezier(0.04, 0.85, 0.64, 1.22);

  &:hover, & .hover {
    @include animation(
        $name: go-left,
        $duration: 0.8s,
        $timing-function: ease-out,
        $fill-mode: both
    );
  }

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
    transform: rotate(125deg);
    position: relative;
    top: -10px;
    display: block;
  }

  &::after {
    content: '';
    border-bottom: 1px solid $cMain;
    transform: rotate(-125deg);
    position: relative;
    top: 5px;
    display: block;
  }

}

.nxt-arrow {
  cursor: pointer;
  position: fixed;
  top: 50%;
  right: 10px;
  width: 20px;
  height: 40px;
  transform: translateX(-10%);
  transition: all 0.5s cubic-bezier(0.04, 0.85, 0.64, 1.22);

  &:hover, & .hover {
    @include animation(
        $name: go-right,
        $duration: 0.8s,
        $timing-function: ease-out,
        $fill-mode: both
    );
  }

  @keyframes go-right {
      0%, 100% {
          transform: translateX(-20%);
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
    transform: rotate(-125deg);
    position: relative;
    top: -10px;
    display: block;
  }

  &::after {
    content: '';
    border-bottom: 1px solid $cMain;
    transform: rotate(125deg);
    position: relative;
    top: 5px;
    display: block;
  }
}

a.scroll-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  color: $cWhite;
  text-decoration: none;
  background-color: rgb(66, 185, 131, 0.6);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-position: -10px -8px;
  transition: all 0.5s cubic-bezier(0.04, 0.85, 0.64, 1.22);

  &:hover {
    transform: translateY(-18px);
    background-color: rgb(66, 185, 131, 1);
  }

  & span {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 16px;
  }

}

.h1-works {
 @extend .h1-animation;
 transition-delay: 0.5s;

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

.work-container {
  position: absolute;
  top: 81px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $cWhite;
  padding: 0;
  

  & span{
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: $cTransition;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    transform: translateY(-110vh);


    &.page-transition {
      transition: all .8s;

      @include animation(
          $name: trans-animation,
          $duration: .8s,
          $iteration-count: 1,
          $timing-function: ease-out,
          $fill-mode: both
      );
    }
  }
      @keyframes trans-animation {
      0% {
          transform: translateY(-50vh) scaleY(1);
      }
      50% {
          transform: translateY(0) scaleY(2);
      }
      100% {
          transform: translateY(100vh) scaleY(0);
      }
    }
}
</style>
