<template>
  <header>
      <Container>
        <nav>
            <NuxtLink to="/" exact class="brand">Megan<span>Filo</span></NuxtLink>
            <div  class="nav-links">
              <NuxtLink to="/about">About</NuxtLink>
              <NuxtLink to="/articles">Articles</NuxtLink>
              <ColorModeToggle :mode="mode" @toggleMode="$emit('toggleMode')"/>
            </div>
        </nav>
      </Container>
  </header>
</template>

<script>
export default {
  props: ['mode'],
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_variables.scss';
nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  a, a:hover, .nuxt-link, .nuxt-link-active {
      text-decoration: none;
  }

  a.brand {
    font-size: 2em;
    color: $text-color;

    span {
      color: $header-color;
      font-weight: bold;
    }
  }

  .nav-links {
    display: flex;
    justify-content: flex-end;
    font-size: 1.15em;

    a, a:hover, .nuxt-link, .nuxt-link-active {
      color: $text-color;
    }

    a, div {
      margin-left: 3rem;
    }

    .mode-switch {
      font-size: 1.5em;
    }
  }
}

@media screen and (max-width: 480px) {
  nav a.brand {
    font-size: 22px;
  }

  nav .nav-links {
    font-size: 14px;

    a, div {
      margin-left: 1.5rem;
    }
  }
}

.dark {
  nav {
    a.brand {
      color: $dark-mode-white;

      span {
        color: $white;
      }
    }

    .nav-links {
          a, a:hover, .nuxt-link, .nuxt-link-active {
            color: $dark-mode-white;
        }
    }
  }
}
</style>