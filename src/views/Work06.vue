<template>
  <div class="work-content">
    <div class="work-text">
      <h2>OrganWorks</h2>
      <p>
        ダンスカンパニーOrganWorksのフライヤーデザイン。
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
          name: '「Triple Bill」公演フライヤー',
          period: '2017年1月',
          image: '../../images/organworks01.jpg'
        },
        {
          name: '「Tatiana Chorot x OrganWorks」公演フライヤー',
          period: '2016年12月',
          image: '../../images/organworks02.jpg'
        },
        {
          name: '「Reason to Believe」公演フライヤー',
          period: '2016年5月',
          image: '../../images/organworks03.jpg',
        },
        {
          name: '「Grease2」公演フライヤー',
          period: '2013年6月',
          image: '../../images/organworks04.jpg'
        },
        {
          name: '「空の街」公演フライヤー',
          period: '2013年2月',
          image: '../../images/organworks05.jpg'
        }
      ]
    })
}
</script>

<style lang="scss">
@import "@/scss/_animation.scss";

.work-content {
  transition: all 1.8s;
  transition-delay: 0.08s ;

    @include animation(
        $name: slideup,
        $duration: 1.8s,
        $iteration-count: 1,
        $timing-function: ease-out,
        $fill-mode: both
    );

    @keyframes slideup {
      0% {
          transform: translateY(12%);
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