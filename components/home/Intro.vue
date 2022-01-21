<template>
    <section class="intro">
        <Container>
            <div class="two-col">
                <div class="photo" aria-label="Photo of Megan"></div>
                <div>
                    <div class="greeting">
                        <span role="img" aria-hidden="true" class="wave">
                            👋
                        </span>
                        <h1>Hi, I'm Megan.</h1>
                    </div>
                    <p>I'm a software engineer based in Milwaukee, WI. I love building accessible and intuitive digital experiences.</p>
                    <p>I work as a frontend engineer at a company called <a href="https://www.gitlab.com" rel="noreferrer noopener" target="_blank">GitLab</a>. We're innovating in the realm of DevOps and committed to creating an environment where everyone can contribute.</p>

                    <p>This website is an evergreen document where I'll share what I've created and learned throughout my career.</p>
                    <nuxt-link to="/about">Learn more about me here →</nuxt-link>
                </div>
        </div>
        </Container>
    </section>
</template>

<script>
export default {
    name: 'Intro',
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_variables.scss';
.intro {
    .photo {
        display: block;
        visibility: visible;
        width: 200px;
        height: 200px;
        margin: 0 auto 1.5rem auto;
        border-radius: 50%;
        background: url("~/assets/images/headshot_photo.webp") 0% 0% / cover no-repeat $primary-light;
        background-repeat: no-repeat;
    }

    .greeting {
        display: flex;
        align-items: center;

        .wave {
            margin-right: .5em;
            font-size: 1.75em;

            &:hover,
            &:focus {
                animation: .5s ease infinite waving;
            }
        }
    }
}

@media screen and (min-width: 400px) {
    .intro .greeting .wave  {
        font-size: 2em;
    }
}

@keyframes waving {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(0.1turn);
    }
    100% {
        transform: rotate(0deg);
    }
}
</style>