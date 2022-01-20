<template>
  <div class="stack-item">
      <img :src="require(`~/assets/images/stack/${image}.svg`)" />
      <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
    props: ['image', 'name']
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_variables.scss';

.stack-item {
    position: relative;
    display: inline-block;
    height: 150px;
    width: 120px;

    img {
        display: block;
        text-align: center;
        height: 80px;
        width: 80px;
        margin: 0 auto;
        transition: height .2s, width .2s
    }
    
    span {
        display: block;
        text-align: center;
        visibility: hidden;
        font-size: 14px;
        margin-top: 3px;
        overflow: hidden;
        width: 100%;
    }

    &:hover {
        img {
            height: 83px;
            width: 83px;
            filter: drop-shadow(rgba(0,0,0,.3) 1px 1px 2px);
        }

        span {
            visibility: visible;
        }
    }
}


@media screen and (max-width: 600px) {
    .stack-item span {
        visibility: visible;
    }   
}
</style>