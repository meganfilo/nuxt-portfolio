<template>
  <header>
      <Container>
        <nav>
            <NuxtLink to="/" exact class="brand">Megan<span>Filo</span></NuxtLink>
            <!-- <div class="nav-links">
              <NuxtLink to="/about">About</NuxtLink>
              <NuxtLink to="/articles">Articles</NuxtLink>
              <div class="mode-switch">☀️</div>
            </div> -->
        </nav>
      </Container>
  </header>
</template>

<script>
export default {

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
      color: $text-color;
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

    a, div {
      margin-left: 3rem;
    }
  }
}
</style>