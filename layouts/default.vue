<template>
    <div :class="(mode === 'dark') ? 'dark' : 'light'">
        <Navigation :mode="mode" @toggleMode="toggleMode" />
         <Nuxt />
        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            mode: 'light'
        }
    },
    methods: {
        toggleMode() {
            if (this.mode == 'dark') {
                this.mode = 'light'
            } else {
                this.mode = 'dark'
            }
        }
    }
};
</script>