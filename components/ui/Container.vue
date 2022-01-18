<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import '~assets/styles/base.scss';

.container {
    overflow-wrap: break-word;
    max-width: 800px;
    padding: 2rem 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }

.container.nav-container {
  padding: 0 1.5rem;
}

@media screen and (max-width: 650px) {
  .container {
    padding: 2rem;
  }
  .container.nav-container {
    padding: 0 2rem;
  }
}
</style>
