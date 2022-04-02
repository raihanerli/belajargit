<template>
  <div class="home">
    <h1>Berita Terkini</h1>
    <div class="news" v-for="(news, index) in newsGroup" :key="index">
      <router-link :to="'/detail/id' + index">
        <div class="newsImage">
          <img :src="news.urlToImage" alt="gambar">
        </div>

        <div class="author">
          <p v-if="newsGroup[index].author === null">Anonymous</p>
          <p v-else>{{ news.author }}</p>
        </div>
        <div class="title">
          <h3>{{ news.title }}</h3>
          <div class="publishTime">
            <p>{{ news.publishedAt }}</p>
          </div>
        </div>

      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  computed: {
    newsGroup() {
      return this.$store.state.newsList
    }
  },
  mounted() {
    this.$store.dispatch("fetchnews")
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: rgb(0, 0, 0);
}
h1 {
  text-align: center;
  margin: 20px 0;
}
.home {
  width: 90%;
  margin: 0 auto;
  padding: 30px;
}
.news {
  background-color: #eaeaea;
  margin: 10px;
  padding: 30px;
  text-align: center;
}

a {
  text-decoration: none;
  color: rgb(28, 27, 32);

}
.newsImage img {
  width: 40%;
}
.author {
  font-size: 14px;
  margin: 12px 0;
}
.title {
  font-size: 20px;
  margin: 12px;
}
.publishTime {
  font-size: 12px;
  margin-top: 12px;
}

</style>
