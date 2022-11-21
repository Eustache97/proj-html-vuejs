<script>
import {store} from "../store";
export default {
    name: "SectionProcess",
    data() {
        return {
            store
        }
    }
}
</script>
<template>
<section id="process">
    <div class="intro">
        <h4 >how it works in practice</h4>
        <h2><span>Logistical</span> Procedure</h2>
        <p class="mb-2">We work with innovative methodologies to ensure that the entire delivery process is done from starg to finish as planned.</p>
    </div>
    <div class="row">
        <div class="step"
        v-for="(process, index) in store.process" :key="index">
            <div class="step-number">
                {{process.step}}
            </div>
            <h3 class="mb-1"> {{process.stepName}} </h3>
            <p> {{process.description}} </p>
        </div>
    </div>
</section>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
section#process{
    width: 100%;
    text-align: center;
    padding: 5em 0;
    color: $silver-color;
    .intro{
        width: 50%;
        margin: 0 auto;
    }
    h4{
        color: $primary-color;
        text-transform: uppercase;
    }
    h2{
        font-size: 2rem;
        margin: 1rem 0;
        color: $dark-color;
        span{
            color: $primary-color;
            background-color: rgba($color: $primary-color, $alpha: .2);
        }
    }
    .row{
        border-top: 3px solid rgba($color: $primary-color, $alpha: .2);
        padding: 0 5em;
        justify-content: space-around;
        .step{
            width: calc(100% / 5 - 5em);
            position:relative;
            padding-top: 1em;
            .step-number{
                position: absolute;
                top: -20px;
                left: 50%;
                transform: translateX(-50%);
                border-radius: 50%;
                padding: .5em;
                color: $primary-color;
                font-weight: 800;
                background-color: rgba($color: $primary-color, $alpha: .2);
            }
            h3{
                color: $dark-color;;
            }
        }
    }
}
</style>