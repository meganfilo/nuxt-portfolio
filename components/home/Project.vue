<template>
    <article class="project">
        <a :href="link" class="image-container">
            <img :src="require(`~/assets/images/${image}`)" alt="" aria-hidden="true" />
        </a>
        <div class="project__content">
            <div class="project__content--info">
                <h3 class="title">{{ title }}</h3>
                <p class="stack">
                    {{ stack }}
                </p>
                <p class="project-description">
                    {{ description }}
                </p>
                <div class="links">
                    <a v-if="gitlab" href="/" title="GitLab link" target="_blank">
                        <img src="~/assets/images/icons/gitlab.svg" alt="" />
                    </a>
                    <a v-if="github"  href="/" title="Github link" target="_blank">
                        <img src="~/assets/images/icons/github.svg" alt="" />
                    </a>
                    <a :href="link" title="Link to project" target="_blank">
                        <img src="~/assets/images/icons/link.svg" aria-hidden=" true" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    props: [ 'title', 'image', 'stack', 'description', 'gitlab', 'github', 'link' ],        
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_variables.scss';

article.project {
    margin-top: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 650px;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    
    a.image-container {
        display: block;
        margin-bottom: 1rem;
        max-width: 650px;
        overflow: hidden;
        z-index: 1;
        position: relative;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);


        img {
            width: 100%;
            transition: transform 0.2s ease-in;

            &:hover, 
            &:focus {
                opacity: 0.6;
                transition: all 0.3s ease-in;
                transform: scale(1.2)
            }
        }
    }
}

.project__content {
    z-index: 1;

    .stack {
        font-size: 13px;
    }

    .links {
        display: flex;
        justify-content: center;

        a {
            position: relative;
            display: inline-block;
            max-width: 30px;

            img {
                width: 100%;
                filter: invert(67%) sepia(2%) saturate(567%) hue-rotate(201deg) brightness(89%) contrast(87%);
            
                &:hover, 
                &:focus {
                    transition: filter 0.2s ease-in;
                    filter: invert(86%) sepia(5%) saturate(90%) hue-rotate(202deg) brightness(94%) contrast(88%);
                }
            }
        }
    }
}

@media screen and (min-width: 600px) {
    article.project {

        &:nth-of-type(odd) {
            flex-direction: row;
            text-align: right;

            .project__content {
                padding-left: 1.5rem;
            }

            .project__content .links {
                justify-content: flex-end;
            }
        }

        &:nth-of-type(even) {
            text-align: left;
            flex-direction: row-reverse;

            .project__content {
                padding-right: 1.5rem;
            }

            .project__content .links {
                justify-content: flex-start;
            }
        }

        a.image-container {
            max-width: 350px;
            height: auto;
        }       

        .links a {
            max-width: 25px;
        }
    }
}
</style>