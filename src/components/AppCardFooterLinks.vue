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
    }
}
</script>
<template>
    <div class="card">
        <h3 class="mb-1"> {{item.title}} </h3>
        <ul>
            <li v-for="(link, index2) in item.links" :key="index2">
                <i class="fa-solid fa-chevron-right"></i><a href=""> {{link}} </a>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
.card{
    width:100%;
    padding: 1.5em;
    h3{
        color: $white-color;
    }
    ul{
        list-style-type: none;
        line-height: 1.5em;
        li{
            i{
                margin-right: 1em;
            }   
            &:hover i{
                transform: rotate(90deg);
            }
            &:hover a{
             color: $primary-color;
            }
        }
                            
    }
}
</style>