<script>
import {store} from "../store";
import AppCardFeedbacks from "./AppCardFeedbacks.vue";
export default {
    name: "SectionFeedback",
    components: {
        AppCardFeedbacks
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
<section id="feedbacks">
    <div class="container">
        <div class="intro">
            <h4>customer testimonials</h4>
            <h2>Trusted <span>Feedback</span></h2>
            <p class="mb-2">We work intensively in search of ideals that can add up in the lives of our customers. This is moves us and we are grateful for the recognition</p> 
        </div>
        <div class="row">
            <div class="col"
            v-for="(feed, index) in store.feedbacks" :key="index">
                <AppCardFeedbacks :item="feed"/>
            </div>
        </div>
    </div>
</section>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
section#feedbacks{
    width: 100%;
    height: 500px;
    overflow-y: scroll;
    padding: 5em 0;
    color: $white-color;
    background-color: $dark-color;
    .container{
        .intro{
            width: 50%;
            text-align: center;
            margin: 0 auto;
        }
        .row{
            gap: 1.5em;
            .col{
                width: calc(100% / 3 - 1.5em);
                background-color: $shark-color;
                border-radius: 5px;
            }
        }
    }
}
</style>