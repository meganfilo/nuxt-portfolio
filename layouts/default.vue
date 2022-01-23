<template>
    <div :class="(mode === 'dark') ? 'dark' : 'light'">
        <Navigation :mode="mode" @toggleMode="toggleMode" />
         <Nuxt />
        <Footer />
    </div>
</template>

<script>
export default {
    head: {
    title: "Megan Filo - Fullstack Web Developer",
    titleTemplate: " %s | Megan Filo - Fullstack Web Developer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "The digital portfolio of Megan Filo, a fullstack web developer and software engineer." },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩‍💻</text></svg>" }],
    },
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