<template>
  <main class="article">
      <Container>
          <header>
            <time>{{ article.month}} {{article.day}}, {{article.year}}</time>
            <h1>{{article.title}}</h1>
            <!-- <p>Categories: <span v-for="tag in article.tags" :key="tag">{{tag}}</span></p> -->
          </header>
          <nuxt-content :document="article" />
      </Container>
  </main>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch();

        return {article}
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_variables.scss';

.article header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;

    time {
        font-weight: 300;
    }

    h1 {
        margin: 0 0 1rem 0;
    }
}
</style>