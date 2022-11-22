<script>
import { store } from "../store";
export default {
    name: "AppCardFooterLinks",
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
<div class="card d-flex">
    <div class="cargo">
        <img :src="getImg(item.image)" alt="">  
    </div>
    <div class="specifics">
        <h3> {{item.type}} </h3>
        <p class="mt-05"> {{item.caracteristique}} </p>
    </div>
</div>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
.card{
    .cargo{
        width: 30%;
        padding: .5em;
        background-color: lightblue;
    }
    .specifics{
        width: 70%;
        padding: .5em;
        p{
            color: $silver-color;

        }
    }
}
</style>