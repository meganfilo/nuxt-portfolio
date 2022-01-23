<template>
  <main>
    <Container>
      <h1>Articles</h1>
      <section>
        <article class="article-card" v-for="article of articles" :key="article">
          <nuxt-link
            :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          >
            <!-- <img :src="require(`~assets/images/articles/${article.img}`)" alt="" v-if="article.img" /> -->
            <div class="article-info">
                <p>{{article.month}} {{article.day}}, {{ article.year}}</p>
              <h2>{{ article.title }}</h2>
                <div class="tags">
                    <a href="/" v-for="tag of article.tags" :key="tag">{{tag}}</a>
                </div>
              <p>{{ article.description }}</p>
            </div>
          </nuxt-link>
        </article>
      </section>
    </Container>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Articles'
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "slug", "year", "month", "day", "tags"])
    //   .sortBy("createdAt", "asc")
      .fetch();

    return { articles };
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/styles/_variables.scss';

    h1 {
        text-align: center;
    }

    .dark {
        .article-card {
            background: $dark-mode-dark;

            &:hover {
                background-color: lighten($dark-mode-dark, 10%);
            }

            .article-info {
                color: $white;
            }
        }
    }

    .light {
        .article-card {
            background: $secondary-color;

            &:hover {
                background-color: darken($secondary-color, 10%);
            }
            
            .article-info {
                color: $text-color;
            }
        }
    }

    .article-card {
        border-radius: $border-radius;
        margin: 1rem 0;

        & > a {
            text-decoration: none;
            padding: 1rem;
            display: block;
            position: relative;
        }

        p {
            margin-bottom: 0;
        }

        h2::after {
            width: 0;
        }

        .tags {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 1rem 0;

            a {
                display: inline-block;
                font-size: .9rem;
                font-weight: 600;
                line-height: normal;
                padding: 0.3rem 0.6rem 0.4rem;
                vertical-align: middle;
                border: 1px solid $text-color;
                border-radius: 8px;
                color: $primary-light;
                margin-right: 1rem;
                margin-bottom: .5rem;
                text-decoration: none;
                text-transform: lowercase;

                &:hover {
                    background-color: lighten($secondary-color, 10%);
                }
            }
        }
    }
</style>
