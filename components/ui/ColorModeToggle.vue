<template>
    <div @click="$emit('toggleMode')" class="mode-switch">    {{ currentMode }}
 </div>
</template>

<script>
export default {
    props: ['mode'],
    computed: {
        currentMode: function() {
            if (this.mode == 'light') {
                return '☀️'
            } else {
                return '🌙'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.mode-switch {
    cursor: pointer;
    transition: transform 0.3s ease-in;

    &:hover {
        transform: scale(1.1);
    }
}
</style>