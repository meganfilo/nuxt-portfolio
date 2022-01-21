<template>
  <header>
      <Container>
        <nav>
            <NuxtLink to="/" exact class="brand">Megan<span>Filo</span></NuxtLink>
            <div  class="nav-links">
              <NuxtLink to="/about">About</NuxtLink>
              <ColorModeToggle :mode="mode" @toggle="$emit('toggle')"/>
            </div>
            <!-- <div @click="toggleMobileNav" class="hamburger-container" v-show="mobile">
                <img :class="{'icon-active' : mobileNav}" src="~/assets/images/icons/hamburger.svg" alt="Click to open nav menu" />
            </div>
            <transition name="mobile-nav">
              <div v-show="mobileNav" class="mobile-nav-links">
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="/articles">Articles</NuxtLink>
              <div class="mode-switch">☀️</div>
            </div>
            </transition> -->
        </nav>
      </Container>
  </header>
</template>

<script>
export default {
  props: ['mode'],
  data() {
    return {
      mobile: true,
      mobileNav: true,
    }
  }
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

  .icon-active {
    transform: rotate(180deg);
  }

  .mobile-nav-links {
    z-index: 3;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: $primary-color;
    top: 0;
    left: 0;
    border-right: 1px solid black;

      a, a:hover, .nuxt-link, .nuxt-link-active {
        margin-left: 0;
        color: $white;
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