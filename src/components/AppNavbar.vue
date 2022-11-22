<script>
import { store } from "../store";
export default {
    name: "AppNavbar",
    data() {
        return {
            store
        }
    }
}
</script>
<template>
<div class="navbar">
    <ul class="d-flex">
        <li v-for="(link, index) in store.menu" :key="index" >
            <a href=""> {{link}} </a>
        </li>
        <div class="get-in">
            <i class="fa-regular fa-user"></i>
            <a class="btn btn-primary" href="">Get in touch</a>
        </div> 
    </ul>
</div>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
.navbar{
    height: 100%;
    ul{
        list-style-type: none;
        li{
            a{
                display: inline-block;
                text-transform: uppercase;
                margin-right: 1rem;
                font-weight: 500;
                padding-bottom: .5em;
            }
            &:hover a{
                border-bottom: 2px solid $primary-color;
            }
        }
    }
    .get-in{
        i{
            margin-right: .5em;
        }
    }
}
</style>