<template>
  <main>
    <Container>
      <section>
        <h1>About Me</h1>
        <p>
          I'm Megan Filo, a software engineer currently living in Milwaukee,
          Wisconsin (or as Alice Cooper calls it, 'The Good Land').
        </p>
        <p>
          I originally moved to Nashville, Tennessee in 2016 to start a career
          in the music business. I landed a job with a major record label that
          involved creating and maintaining e-commerce shops for artists that
          occasionally had me doing basic HTML updates and some fun graphic
          design work for social media content. At another record label gig, I
          created and maintained Shopify stores.
        </p>
        <p>
          Those tiny pieces of web development work sparked my interest and I
          was ready to learn more. After a year of late nights and weekends of
          self-study, I landed my first web developer gig in 2019. Since then, I
          have continued to learn more about many aspects of front-end and
          back-end web development and picking up new technologies when I can.
        </p>
        <p>
          When I’m not staring deeply into a text editor, I’m usually playing
          video games, playing some kind of musical instrument, out getting ice
          cream with my husband, or spending quality cuddle time with our dog,
          Milo.
        </p>
        <p>
          I also play drums 🥁. You can catch me playing around the U.S. with a
          badass artist named
          <a
            href="http://www.catalinamusic.net/en/welcome"
            target="_blank"
            rel="noreferrer"
            >Catalina</a
          >.
        </p>
      </section>

      <section id="toolbox">
        <h2>Toolbox</h2>
        <div class="stack-grid">
          <StackItem
            v-for="item in stackItems"
            :key="item.name"
            :name="item.name"
            :image="item.path"
          />
        </div>
      </section>
    </Container>
  </main>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      stackItems: [
        {
          name: "Babel",
          path: "babel",
        },
        {
          name: "Bootstrap",
          path: "bootstrap",
        },
        {
          name: "Bulma",
          path: "bulma",
        },
        {
          name: "CSS",
          path: "css-3",
        },
        {
          name: "Express",
          path: "express",
        },
        {
          name: "Gatsby",
          path: "gatsby",
        },
        {
          name: "Git",
          path: "git-icon",
        },
        {
          name: "Github",
          path: "github-icon",
        },
        {
          name: "GitLab",
          path: "gitlab",
        },
        {
          name: "GraphQL",
          path: "graphql",
        },
        {
          name: "Handlebars",
          path: "handlebars",
        },
        {
          name: "Heroku",
          path: "heroku-icon",
        },
        {
          name: "HTML",
          path: "html-5",
        },
        {
          name: "Jest",
          path: "jest",
        },
        {
          name: "JIRA",
          path: "jira",
        },
        {
          name: "jQuery",
          path: "jquery",
        },
        {
          name: "Litmus",
          path: "litmus",
        },
        {
          name: "MongoDB",
          path: "mongodb",
        },
        {
          name: "Netlify",
          path: "netlify",
        },
        {
          name: "NodeJS",
          path: "nodejs",
        },
        {
          name: "NPM",
          path: "npm",
        },
        {
          name: "React Router",
          path: "react-router",
        },
        {
          name: "React",
          path: "react",
        },
        {
          name: "Redux",
          path: "redux",
        },
        {
          name: "SASS/SCSS",
          path: "sass",
        },
        {
          name: "Selenium",
          path: "selenium",
        },
        {
          name: "Shopify",
          path: "shopify",
        },
        {
          name: "VS Code",
          path: "visual-studio-code",
        },
        {
          name: "Webpack",
          path: "webpack",
        },
        {
          name: "Yarn",
          path: "yarn",
        },
        {
          name: "Docker",
          path: "docker",
        },
        {
          name: "Javascript",
          path: "javascript",
        },
        {
          name: "Vue 2 & 3",
          path: "vuejs",
        },
        {
          name: "Typescript",
          path: "typescript",
        },
        {
          name: "AEM",
          path: "aem_logo",
        },
        {
          name: "NuxtJS",
          path: "nuxtjs-icon",
        },
        {
          name: "Next.js",
          path: "nextjs",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
    margin-bottom: 2rem;

}
</style>
