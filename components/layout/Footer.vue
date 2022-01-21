<template>
    <footer>
        <Container>
            <div class="footer__socials">
                <a href="https://github.com/meganfilo"
                   title="Github link"
                   rel="noreferrer noopener"
                   target="_blank">
                    <img src="~/assets/images/icons/github.svg" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/meganfilo/"
                   title="LinkedIn link"
                   rel="noreferrer noopener"
                   target="_blank">
                    <img src="~/assets/images/icons/linkedin.svg" alt="" />
                </a>
                <a href="mailto:meganfilodev@gmail.com"
                   title="Eamil link"
                   rel="noreferrer noopener"
                   target="_blank">
                    <img src="~/assets/images/icons/email.svg" alt="" />
                </a>
            </div>
            <p>Built by Megan Filo • &copy; {{getCurrentYear}}</p>
        </Container>
    </footer>
</template>

<script>
export default {
    computed: {
        getCurrentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_variables.scss';

footer {
    background-color: $secondary-color;
    text-align: center;
}

.footer__socials {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;

     a {
        margin: 0 .75rem;

        img {
            width: 1.75rem;
            filter: invert(67%) sepia(2%) saturate(567%) hue-rotate(201deg) brightness(89%) contrast(87%);
        }

        img:hover,
        img:focus {
            transition: filter 0.2s ease-in;
            filter: invert(86%) sepia(5%) saturate(90%) hue-rotate(202deg) brightness(94%) contrast(88%);
        }
    }
}

.dark footer {
    background: $dark-mode-dark;
}

</style>