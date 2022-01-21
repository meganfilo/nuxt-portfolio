<template>
    <div :class="(mode === 'dark') ? 'dark' : 'light'">
        <Navigation :mode="mode" @toggle="toggle" />
         <Nuxt />
        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            mode: 'dark'
        }
    },
    methods: {
        toggle() {
            if (this.mode == 'dark') {
                this.mode = 'light'
            } else {
                this.mode = 'dark'
            }
        }
    }
};
</script>