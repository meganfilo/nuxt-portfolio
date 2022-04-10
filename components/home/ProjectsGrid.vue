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
                    title: 'RILA Performance Calculator Tool',
                    image: 'rila-tool.webp',
                    stack: 'React • Typescript • Adobe Experience Manager',
                    description: "Previous project lead for a financial calculator app for Jackson. This works in tandem with a market data API supplied from a third-party vendor. ",
                    gitlab: null,
                    github: null,
                    link: 'https://www.jackson.com/annuities/registered-index-linked-annuities/market-link-pro-suite.html#tool'
                },
                {
                    title: 'Market Link Pro Suite Experience',
                    image: 'market-link-pro-screencap.webp',
                    stack: 'Adobe Experience Manager • LESS • jQuery',
                    description: "Previous contributor for a marketing site showcasing one of Jackson's newest annuity products.",
                    gitlab: null,
                    github: null,
                    link: 'https://www.jackson.com/annuities/registered-index-linked-annuities/market-link-pro-suite.html'
                },
                {
                    title: 'Jackson Charitable Foundation',
                    image: 'jcf-screencap.webp',
                    stack: 'HTML • CSS • Javascript',
                    description: "Previous maintainer for a philanthropic blog site.",
                    gitlab: null,
                    github: null,
                    link: 'https://www.jacksoncharitablefoundation.org'
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