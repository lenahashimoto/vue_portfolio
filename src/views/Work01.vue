<template>
  <div class="work-content">
    <div class="work-header">
      <img src="@/assets/images/sample.jpg">
      <span>this is Work_01</span>
    </div>
    <div class="work-text">
      <p>
        ダンスカンパニーCo. Ruri Mitoのウェブサイト、フライヤー・ポストカードデザイン。
      </p>
    </div>
    <div class="main-content" v-for="(project, i) in projects" :key="i">
      <h3>{{ project.name }}</h3>
      <p>{{ project.period }}</p>
      <img :src="project.image">
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
          name: 'Co. Ruri Mito 東北ツアー',
          period: '2019年8月',
          image: '../../images/sample.jpg'
        },
        {
          name: 'Co. Ruri Mito 東北ツアー',
          period: '2019年8月',
          image: '../../images/sample.jpg'
        },
        {
          name: 'Co. Ruri Mito 東北ツアー',
          period: '2019年8月',
          image: '../../images/sample.jpg'
        },     
      ]
    })
}
</script>

<style lang="scss">
@import "@/scss/_animation.scss";

.work-content {
  transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition-delay: 0.08s;

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
}

.work-header {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    font-size: 2em;
    color: #fff;
    display: inline-block;
    width: 100%;
  }
}

.main-content, .work-text {
  width: 80vw;
  margin: 0 auto;
  padding-bottom: 40px;
  padding-top: 40px;
  border-bottom: 1px solid #8c99a578;

  @include tab {
    padding-bottom: 60px;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>