<script>
import {store} from "../store";
import HeaderJumbotron from "./HeaderJumbotron.vue";
export default {
    name: "AppHeader",
    components: {
        HeaderJumbotron
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="header-top">
        <div class="container d-flex">
            <div class="info-hour">
                <span>
                    <i class="fa-solid fa-clock"></i>
                    Open Hour: {{store.infos.hours}} 
                </span>
            </div>
            <div class="info-contact">
                <a href="">
                    <i class="fa-solid fa-phone"></i>
                    {{store.infos.phoneNumber}}
                </a>
                <a href="">
                    <i class="fa-solid fa-envelope"></i>
                    {{store.infos.email}}
                </a>
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
<HeaderJumbotron />
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
.header-top{
    background-color: $header_top-color;
    color: $silver-color;
    font-size: .8rem;
    padding: 1em;
    .container{
        .info-contact{
            a{
                display: inline-block;
                margin-right: 1rem;
            }  
        }
    }
    
}

</style>