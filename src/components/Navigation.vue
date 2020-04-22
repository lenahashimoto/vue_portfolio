<template>
    <div class="navigation">
        <transition name="fade">
        <div class="nav_window" v-show="show">
            <ul>
                <li
                v-for="(nav_list, i) in nav_lists" 
                :key="i" 
                :name="nav_list.name"
                :path="nav_list.path">
                <router-link :to="nav_list.path">{{ nav_list.name }}</router-link></li>
            </ul>
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
}

.nav_btn {
    position: relative;
    top: 20px;
    left: 20px;
    width: 30px;
    height: 30px;
    background-color: #3d576d;
    border-radius: 40px;
    cursor: pointer;

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
}
li {
  display: block;
  margin: 20px 10px;
}
a {
  color: #42b983;
}
</style>
