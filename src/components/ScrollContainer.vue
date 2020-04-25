
<template>
  <swiper class="swiper scrollcontainer" :options="swiperOption">
    <swiper-slide class="text">
      <div class="content">
      <div class="fullname" data-swiper-parallax-x="800">橋本玲奈</div>
      <div class="name-eng" data-swiper-parallax-x="200">Lena Hashimoto</div>
      <div class="main-content" data-swiper-parallax-x="300">
        <p>アリゾナ州立大学美術学部写真科卒業。
          写真を使ったフライヤーデザイン等のためPhotoshopやIllustratorを勉強してデザインを始め、
          ウェブデザインにも興味を持ち、独学から始める。語学を活かしてコンテンポラリーダンサーの海外公演の
          マネージメント等も行う。現在はフロントエンド開発を学んでいる。
        </p>
        </div>
        </div>
        </swiper-slide>
        <swiper-slide>
        <div class="main-content" data-swiper-parallax-x="1000">
        <h3 data-swiper-parallax-x="500">デザイン</h3>
        <ul>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
        <h3 data-swiper-parallax-x="-500">フロントエンド</h3>
        <ul>
          <li class="sh">言語</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>SCSS</li>
          <li class="sh">フレームワーク</li>
          <li>Vue.js</li>
          <li>React.js</li>
          <li class="sh">開発ツール</li>
          <li>Visual Studio Code</li>
          <li>Webpack</li>
          <li>Vue CLI</li>
          <li>Vuex</li>
        </ul>
        </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-content" data-swiper-parallax-x="50">
        <ul data-swiper-parallax-x="-50">
          <li class="sh">データベース</li>
          <li>MySQL</li>
          <li>Firebase Realtime Database</li>
          <li>その他</li>
          <li>Git/GitHub</li>
          <li>npm/yarn</li>
          <li>Wordpress</li>  
        </ul>
        <h4 class="main-content">学習中・学習予定</h4>
        <ul>
          <li>Redux</li>
          <li>Hooks</li>
          <li>Next.js</li>
          <li>Typescript</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
        </ul>
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