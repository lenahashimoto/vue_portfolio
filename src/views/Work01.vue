<template>
  <div class="work-content">
    <div class="work-text">
      <h2>Co. Ruri Mito</h2>
      <p>
        ダンスカンパニーCo. Ruri Mitoのウェブサイト、フライヤー・ポストカード等のデザイン。
      </p>
      <p>
       <a href="http://rurimito.com/" target="_blank">http://rurimito.com/</a>
      </p>
    </div>
    <div class="main-content" v-for="(project, i) in projects" :key="i">
      <h3>{{ project.name }}</h3>
      <p>{{ project.period }}</p>
      <img :src="project.image">
      <img :src="project.image2">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work01',
  props: ["id"],
  data: () => ({
      projects: [
        {
          name: 'Co. Ruri Mito 東北ツアー フライヤー',
          period: '2019年8月',
          image: '../../images/corurimito01.jpg'
        },
        {
          name: 'Co. Ruri Mito カンパニーウェブサイト',
          period: '2018年12月',
          image: '../../images/corurimito02.jpg',
          image2: '../../images/corurimito03.png'
        },
        {
          name: 'Co. Ruri Mito 公演フライヤー',
          period: '2019年2月',
          image: '../../images/corurimito04.jpg'
        },
        {
          name: 'Co. Ruri Mito 公演フライヤー',
          period: '2018年6月',
          image: '../../images/corurimito05.jpg'
        }
      ]
    })
}
</script>

<style lang="scss">
@import "@/scss/_animation.scss";

.work-content {
  min-height: 100vh;
  transition: all 0.8s;
  transition-delay: 0.8s ;
  box-shadow: 0px 0px 8px 3px rgb(143, 159, 172, 0.5);

    @include animation(
        $name: w-slideup,
        $duration: 0.8s,
        $iteration-count: 1,
        $timing-function: ease-out,
        $fill-mode: both
    );

    @keyframes w-slideup {
      0% {
          transform: translateY(5%);
          opacity: 0;
      }
      100% {
          transform: translateY(0);
          opacity: 1;
      }
  }
}

.work-header {
  width: 100%;
  height: 300px;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 0;
    filter: brightness(80%);
    }

  & > span {
    font-family: 'Josefin Sans', 'Noto sans JP', sans-serif;
    font-weight: 100;
    position: absolute;
    bottom: -30px;
    left: -110px;
    font-size: 2em;
    display: inline-block;
    width: 100%;
  }
}

.main-content {
  width: 80vw;
  margin: 0 auto;
  padding-bottom: 40px;
  padding-top: 40px;
  border-bottom: 1px solid #8c99a578;
  text-align: left;

  &:last-child {
    border-bottom: none;
  }

  @include tab {
    padding-bottom: 60px;
  }

  @include pc {
    width: 800px;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.work-text {
  @extend .main-content;
  padding-top: 60px;

  & h2 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 100;
    font-size: 2em;
  }
}
</style>