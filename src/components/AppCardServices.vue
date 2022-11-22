<script>
import { store } from "../store";
export default {
    name: "AppCardServices",
    props: {
        item: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
<div class="card">
    <div class="head">
        <i class="icon" :class="item.icon"></i>   
        <i class="fa-solid fa-arrow-right"></i>
        </div>
        <h3> {{item.name}} </h3>
        <p> {{item.description}} </p>
    </div>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
.card{
    padding: 1.5em;
    .head{
        display: flex;
        justify-content: space-between;
        i{
            color: $primary-color;
            cursor: pointer;
        }
        .icon{
            display: inline-block;
            background-color: rgba($color: $primary-color, $alpha: .2);
            height: 50px;
            width: 50px;
            border-radius: 50%;
            font-size: 2rem;
            text-align: center;
            line-height: 50px;
        }
    }
    h3{
        margin: 1em 0;
    }
}
</style>