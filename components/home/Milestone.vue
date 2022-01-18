<template>
    <article class="milestone">
        <div class="milestone__icon--container">
            <img :src="require(`~/assets/images/${img}.jpeg`)" aria-hidden="true" alt="" />
        </div>
        <p class="date">{{ date }}</p>
        <h3 class="position">{{ position }} @ {{ company }}</h3>
        <!-- <p class="description">{{ description }}</p> -->
        <ul v-if="points" class="points">
            <li v-for="point in points" :key="point">
                {{point}}
            </li>
        </ul>
    </article>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
        },
        date: {
            type: String,
        },
        company: {
            type: String,
        },
        position: {
            type: String,
        },
        description: {
            type: String,
        },
        points: {
            type: Array,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_variables.scss';

.milestone {
    background: $white;
    padding: 35px 32px;
    position: relative;
    margin-bottom: 55px;
    border-radius: $border-radius;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);

    &:after {
    background: $primary-light;
    z-index: -1;
    content: "";
    left: 50%;
    position: absolute;
    height: 55px;
    bottom: 100%;
    transform: translate(-50%,-13px);
    width: 2px;
    }

    &__icon--container {
        background: transparent;
        height: 50px;
        left: 50%;
        position: absolute;
        top: 0;
        transform: translate(-50%,-50%);
        width: 50px;

        img {
            border-radius: 50%;
        }
    }

    .date {
        text-transform: uppercase;
        font-size: 14px;
        margin-bottom: 0;
    }

    .position {
        margin: 0;
    }

    .description {}

    .points {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 1rem auto;
        text-align: left;
        max-width: 500px;
    }
}
</style>