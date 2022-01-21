<template>
    <section class="timeline">
        <Container>
            <div class="timeline__content">
                <h2>Work Experience</h2>
                <div class="milestones-container">
                    <Milestone v-for="milestone in milestones" :key="milestone.company" :date="milestone.date" :company="milestone.company" :position="milestone.position" :img="milestone.img" :description="milestone.description" :points="milestone.points"/>
                </div>
            </div>
        </Container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            milestones: [
                {
                    date: 'January 2022 - Present',
                    company: 'GitLab',
                    position: 'Frontend Engineer',
                    img: 'gitlab_logo',
                    description: null,
                    points: null
                },
                {
                    date: 'February 2019 - December 2021',
                    company: 'Jackson',
                    position: 'Web Developer',
                    img: 'jackson_logo',
                    description: "I joined Jackson as a Web Developer I in early 2019 and was quickly promoted to the Web Developer II position a year later. This was my first role as a web developer and I learned valuable lessons on how to collaborate with other developers and stakeholders. This was also my introduction to agile and SAFe principles.",
                    points: [
                        'Developed customer-facing websites and applications within Adobe Experience Manager and React',
                        'Implemented MJML framework, cutting HTML email development time by 50%',
                        'Interpreted customer and business requirements while coordinating with necessary stakeholders (content marketing, UX designers, legal, etc) to communicate changes and overcome obstacles in the development process',
                        'Advocated for web accessibility; adhered to WCAG 2.0 Level AA compliance during development',
                        'Mentored junior developers'
                    ]
                },
                {
                    date: 'September 2016 - January 2019',
                    company: 'Sony Music',
                    position: 'Ecommerce Manager',
                    img: 'sony_logo',
                    description: "Starting off as a part-time ecommerce intern in Fall 2016, I was promoted to an assistant in January 2017 and promoted again to the manager position in December 2017. I worked with artists both off and on the label's roster to create, maintain, and drive traffic to their online merchandise stores. Throughout my time in this position I was able to dabble with very basic HTML and CSS, which ultimately piqued my interest in learning and pursuing a career in web development.",
                    points: [
                        "Head of artist ecommerce/D2C initiatives",
                        "Provided basic frontend web development and graphic design for over 40 client webstores",
                        "Boosted department's annual ecommerce revenue by over 20% in 2018",
                        "Hired and supervised interns"
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_variables.scss';
.dark {
    .timeline {
        background: $dark-mode-dark;
        transition: background 0.2s ease-in;
    }
}


.timeline {
    background: $secondary-color;
    transform: skew(0deg, -7deg);

    &__content {
        text-align: center;
        margin: 2rem auto;
        transform: skew(0deg, 7deg)
    }
}

.milestones-container {
    padding-top: 5rem;
}
</style>