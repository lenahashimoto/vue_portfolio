<template>
  <div class="work-content">
    <div class="work-text">
      <h2>らいす～ぱ～</h2>
      <p>
        エスニック創作料理店のウェブサイトのリニューアルをご依頼いただきました。以前から使っていらっしゃったグーペを利用し、テンプレートをカスタマイズ。<br>
        オーナーの甥っ子さんの描いたイラストを使用したいという要望に合わせて作成しました。
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
  name: 'Work02',
  props: ["id"],
  data: () => ({
      projects: [
        {
          name: 'リニューアル',
          period: '2020年3月',
          image: '../../images/ricepaper01.jpg',
          image2: '../../images/ricepaper02.jpg'
        }  
      ]
    })
}
</script>