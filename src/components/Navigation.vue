<template>
    <div class="navigation">
        <transition name="fade">
        <div class="nav_window" v-show="show">
            <div class="nav_box"></div>
            <div class="nav_box">
                <ul>
                    <li
                    v-for="(nav_list, i) in nav_lists" 
                    :key="i" 
                    :name="nav_list.name"
                    :path="nav_list.path">
                    <router-link :to="nav_list.path">{{ nav_list.name }}</router-link></li>
                </ul>
            </div>
        </div>
        </transition>
        <div class="nav_btn" @click="show=!show" v-bind:class="{nav_btn2:show}"></div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data(){
        return{
        show: false,
        nav_lists:[
                {
                    name: 'HOME',
                    path: '/',
                },
                {
                    name: 'PROFILE',
                    path: '/profile' 
                },
                {
                    name: 'WORKS',
                    path: '/works' 
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.navigation {
    background-color: transparent;
    position: fixed;
    top: 0;
}

.nav_window {
  width: 100vw;
  height: 100vh;
  background-color: rgb(0,0,0, 0.4);
  position: absolute;
  top: 0;
  padding: 100px 0;
  display: flex;
}

.nav_box {
    justify-content: flex-end;
    flex-basis: 50%;
}

.nav_btn {
    position: relative;
    top: 25px;
    left: 20px;
    width: 30px;
    height: 30px;
    background-color: #3d576d;
    border-radius: 40px;
    cursor: pointer;

    @include ss {
        top: 15px;
        left: 10px;
    }

    &:hover {
        background-color: #c7d8e5;
    }

    &::before {
        content:'menu';
        font-size: 1.4em;
        position:absolute;
        top: 2px;
        left: 20px;
        transition: all 0.5s ease-out;
        opacity: 0;
    }

    &:hover::before {
        opacity: 1;
        position: absolute;
        top: 2px;
        left: 45px;
    }
}

.nav_btn2 {
    @extend .nav_btn;
    background-color: #c7d8e5;
    color: #c7d8e5;

    &::before {
        content:'close';
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}
li {
  display: block;
  margin: 20px 10px;
  position: relative;
  transition: transform 0.5s ease-in-out;
  transform-origin: left;

  &:hover {
      transform: translateX(20px);
  }
}

a {
  color: #42b983;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 2em;
  text-decoration: none;

  @include pad {
  font-size: 5em;
  }

  &::after {
      content: '';
      border-bottom: 1px solid rgb(66, 185, 131);
      transition:  all 0.8s ease-in-out;
      transform: translateX(-50px);
      overflow: hidden;
      width: 30px;
      position: absolute;
      top: 32px;
      left: 0;
      opacity: 0;

      @include pad {
        border-bottom: 3px solid rgb(66, 185, 131);
        top: 58px;
        width: 28px;
      }
      
  }

  &:hover::after {
      transform: translateX(-27px);
      opacity: 1;
  }
}
</style>
