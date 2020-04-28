
<template>
  <swiper class="swiper scrollcontainer" :options="swiperOption">
    <swiper-slide class="text">
      <div class="content">
        <div class="l-col">
          <div class="section-title">NAME</div>
        </div>
        <div class="r-col">
          <p>橋本玲奈</p>
          <p>Lena Hashimoto</p>
        </div>
        <div class="l-col">
          <div class="section-title">ABOUT</div>
        </div>
        <div class="r-col">
          <p>アリゾナ州立大学美術学部写真科卒業。
            写真を使ったフライヤーデザイン等のためPhotoshopやIllustratorを勉強してデザインを始め、
            ウェブデザインにも興味を持ち、独学から始める。語学を活かしてコンテンポラリーダンサーの海外公演の
            マネージメント等も行う。現在はフロントエンド開発を学んでいる。
          </p>
        </div>
        <div class="l-col">
          <div class="section-title">TOOLS</div>
        </div>
        <div class="r-col">
          <h3>デザイン</h3>
          <ul>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
          <h3>フロントエンド</h3>
          <ul>
            <li class="sh">言語</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>SCSS</li>
            <li class="sh">フレームワーク</li>
            <li>Vue.js</li>
            <li>React.js</li>
            <li>Vuetify</li>
            <li>Bootstrap</li>
            <li class="sh">開発ツール</li>
            <li>Visual Studio Code</li>
            <li>Webpack</li>
            <li>Vue CLI</li>
            <li>Vuex</li>
            <li class="sh">データベース</li>
            <li>MySQL</li>
            <li>Firebase Realtime Database</li>
            <li class="sh">その他</li>
            <li>Git/GitHub</li>
            <li>npm/yarn</li>
            <li>Wordpress</li>  
          </ul>
        </div>
        <a href="keireki.pdf">職務経歴書</a>
      </div>        
    </swiper-slide>
    
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'ScrollContainer',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          parallax:true,
          scrollbar: {
            el: '.swiper-scrollbar'
          },
          mousewheel: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_animation.scss";

.scrollcontainer {
    height: 80%;
    width: 70%;
    overflow: hidden;
    top:10vh;
    right:0;
    left: 0;
    transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition-delay: 2s;

    @include pc {
      width: 800px;
      height: 88vh;
    }

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
      font-family: 'Josefin Sans','Noto Sans JP', sans-serif;
      text-align: left;
      box-sizing: border-box;
      padding: 0 0 0 10px;

        @include tab {
          padding: 50px 20px 10px;
        }

      > .content {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-content: space-between;

        > .l-col {
          flex-basis: 100%;
          height: 100px;
          margin-top: 30px;
          padding: 0;

          @include tab {
            flex-basis: 10%;
            margin-top: 0;
          }

          > .section-title {
            transform: rotate(35deg);
            transform-origin: left;
            padding-top: 10px;
            border-top: 1px solid #2c3e50;
            font-size: 1.6em;
            width: 45%;

              @include tab {
                width: 120px;
            }
          }
        }

        & .r-col {
          flex-basis: 100%;

          @include pc {
            flex-basis: 80%;
          }

          > p {
            margin: 0 0 20px;
            font-size: 1.1em;
            margin-bottom: .75em;
            line-height: 1.6;

            @include tab {
              margin: 0 0 20px 20px;
              font-size: 1.2em;
            }
          }

          > h3 {
            margin-top: 0;
            margin-left: 20px;
            font-weight: 100;
          }

          > ul {
            margin-bottom: 20px;
            margin-left: 20px;

            li {
              margin: 10px;
            }

            & .sh {
              margin-top: 20px;
            }
          }

        }
      }
    }

  }
}



</style>