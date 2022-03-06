<template>
  <main class="article">
      <Container>
          <header>
            <time>{{ article.month}} {{article.day}}, {{article.year}}</time>
            <h1>{{article.title}}</h1>
            <p><span class="tag" v-for="tag in article.tags" :key="tag">{{tag}}</span></p>
          </header>
          <nuxt-content :document="article" />
      </Container>
  </main>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch();

        return { article }
    },
    head() {
        return {
            title: this.article.title,
            description: this.article.description
        }
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

    .tag {
        background: rgba(0,0,0,0.05);
        border-radius: $border-radius;
        padding: 1px 4px;
        border-radius: 6px;
        font-weight: 500;
        padding: 6px;
        white-space: pre-wrap;
    }

    .tag:nth-of-type(2n) {
        margin: 0 1rem;
    }
}

</style>