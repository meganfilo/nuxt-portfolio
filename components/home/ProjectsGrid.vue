<template>
    <section class="projects">
        <Container>
            <div class="projects__content">
                <h2>Latest Projects</h2>
                <Project v-for="project in projects" :key="project.title" :title="project.title"
                :stack="project.stack" :description="project.description" :gitlab="project.gitlab" :github="project.github" :link="project.link" :image="project.image" />
            </div>
        </Container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    title: 'Market Link Pro Suite Experience',
                    image: 'market-link-pro-screencap.png',
                    stack: 'Adobe Experience Manager • LESS • jQuery',
                    description: "Previous contributor for a marketing site showcasing one of Jackson's newest annuity products.",
                    gitlab: null,
                    github: null,
                    link: 'https://www.jackson.com/annuities/registered-index-linked-annuities/market-link-pro-suite.html'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_variables.scss';

.projects {
    padding-top: 2rem;
    display: flex;
    
    &__content {
        text-align: center;
    }
}
</style>