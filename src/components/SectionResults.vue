<script>
import {store} from "../store";
export default {
    name: "SectionResults",
    data() {
        return {
            store
        }
    }
}
</script>
<template>
<section id="results">
    <div class="container">
        <h4>what are we doing</h4>
        <h2><span>Results</span> in Numbers</h2>
        <div class="row">
            <div class="result"
            v-for="(result, index) in store.results" :key="index">
                <span > {{result.quantity}} </span>
                <h3 class="mt-1"> {{result.title}} </h3>
            </div>
        </div>
    </div>
</section>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
section#results{
    text-align: center;
    color: $white-color;
    width: 100%;
    padding: 5em 0;
    background-image: url("../assets/img/bg-10.jpg");
    background-size: cover;
    background-position: center;
    .container{
        h2{
            font-size: 2rem;
            margin-top: 1em ;
            margin-bottom: 2em;
        }
        .row{
            justify-content: space-between;
            .result{
                width: calc(100% / 4);
                padding: 1em;
                span{
                    color: $primary-color;
                    font-size: 2rem;
                    font-weight: 700;
                }
            }
        }
    }
}
</style>
