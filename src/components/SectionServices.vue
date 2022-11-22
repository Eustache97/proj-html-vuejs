<script>
import {store} from "../store";
import AppCardServices from "./AppCardServices.vue";
export default {
    name: "SectionServices",
    components: {
        AppCardServices
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <Section id="services">
        <div class="main-services">
            <div class="container">
                <h4 class="mb-1">road transport</h4>
                <h2>Main<span> Services</span></h2>
                <div class="d-flex mb-2">
                    <p class=" w-80">With all of this expectice and capability comes an unrivalled commitment to customer service. We will work hard to understand your needs in order to develope a productive, long-term partnership.</p>
                    <a class="btn btn-secondary" href="">SELL ALL</a>
                </div>
                
                <div class="row">
                    <div class="col" 
                    v-for="(service, index) in store.services" :key="index">
                        <AppCardServices :item="service"/>
                    </div>
                    
                </div> 
            </div>
        </div>
    </Section>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
section#services{
    padding: 5em 0;
    background-color: $dark-color;
    .main-services{
        width: 100%;
        color: $white-color;
        .container{
            .row{
                justify-content: space-between;
                gap: 1em;
                .col{
                    width: calc(100% / 3 - 1em);
                    background-color: $shark-color;
                }
            } 
        }
    }
}

</style>