<script>
import { store } from "../store";
export default {
    name: "AppCardFeedbacks",
    props: {
        item: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getImg(imgName) {
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
        }
    }
}
</script>
<template>
    <div class="card">
        <img :src="getImg(item.entityImg)" alt="">
        <p> {{item.text }} </p>
        <span>&CloseCurlyDoubleQuote;</span>
    </div>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
.card{
    padding: 1.5em;
    position: relative;
    img{
        height: 30px;
        filter: invert(1);
        margin-bottom: 1em;
    }
    span{
        color: grey;
        font-size: 4rem;
        position: absolute;
        bottom: -20px;
        right: 10px;
    }
}

</style>