<template>
  <div class="work-content">
    <div class="work-text">
      <h2>宮内庁式部職楽部&nbsp;海外公演サイト</h2>
      <p>
        宮内庁式部職楽部の海外公演のレポートや雅楽について紹介しているサイトのレスポンシブ化にてコーディングを担当。<br>
        元々の見た目を保ち、モバイル用に見やすく表示できるように対応しました。
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
          name: '現在公開準備中です。',
          period: '2020年2月',
          image: '../../images/gagaku01.jpg',
          image2: '../../images/gagaku02.jpg'
        }  
      ]
    })
}
</script>