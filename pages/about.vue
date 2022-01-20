<template>
  <main>
    <Container>
      <section>
        <h1>About Me</h1>
        <p>
          I'm Megan Filo, a software engineer currently living in Milwaukee,
          Wisconsin (or as Alice Cooper calls it, 'The Good Land'). 🧀 🐄 🍺
        </p>
        <p>I make websites and web apps of all shapes and sizes. I love working on projects that are focused around building the web presence of non-profits and small businesses, as well as creating UI that is accessible to all types of end users. The majority of my experience lies in frontend web development, but I enjoy working with backend code and Content Management Systems.</p>
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
        <p>
          I like to make cool shit with various combinations of these things:
        </p>
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
          name: "Vue 2 & 3",
          path: "vuejs",
        },
        {
          name: "Bootstrap",
          path: "bootstrap",
        },
        {
          name: "GitLab",
          path: "gitlab",
        },
        {
          name: "React",
          path: "react",
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
          name: "Javascript",
          path: "javascript",
        },
        {
          name: "Git",
          path: "git-icon",
        },
        {
          name: "Typescript",
          path: "typescript",
        },
        {
          name: "Github",
          path: "github-icon",
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
          name: "Bulma",
          path: "bulma",
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
          name: "GraphQL",
          path: "graphql",
        },
        {
          name: "NodeJS",
          path: "nodejs",
        },
        {
          name: "Babel",
          path: "babel",
        },

        {
          name: "React Router",
          path: "react-router",
        },

        {
          name: "NPM",
          path: "npm",
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
          name: "Netlify",
          path: "netlify",
        },
        {
          name: "Selenium",
          path: "selenium",
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
          name: "Shopify",
          path: "shopify",
        },
        {
          name: "Docker",
          path: "docker",
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
        {
          name: "Strapi CMS",
          path: "strapi-icon",
        },
        {
          name: "Material UI",
          path: "material-ui",
        },
        {
          name: "Figma",
          path: "figma",
        },
        {
          name: "Markdown",
          path: "markdown",
        },
        {
          name: "YAML",
          path: "yaml",
        },
        {
          name: "HAML",
          path: "haml",
        },
        {
          name: "MJML",
          path: "mjml_logo",
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

.stack-grid {
  padding: 1rem 0;
  margin: 0;
}
</style>
