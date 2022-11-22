<script>
import {store} from "../store";
export default {
    name: "SectionFeedback",
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
                <img :src="getImg(feed.entityImg)" alt="">
                <p> {{feed.text }} </p>
                <span>&CloseCurlyDoubleQuote;</span>
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
            h4{
                color: $primary-color;
                text-transform: uppercase;
            }
            h2{
                font-size: 2rem;
                margin: 1em 0;
                span{
                    color: $primary-color;
                    background-color: rgba($color: $primary-color, $alpha: .2);
                }
            }
        }
        .row{
            gap: 1.5em;
            .col{
                width: calc(100% / 3 - 1.5em);
                background-color: $shark-color;
                padding: 1.5em;
                border-radius: 5px;
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
        }
    }
}
</style>