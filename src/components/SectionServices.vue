<script>
import {store} from "../store";
export default {
    name: "SectionServices",
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
                <h2>Main<span>Services</span></h2>
                <div class="d-flex mb-2">
                    <p class=" w-80">With all of this expectice and capability comes an unrivalled commitment to customer service. We will work hard to understand your needs in order to develope a productive, long-term partnership.</p>
                    <a class="btn btn-secondary" href="">SELL ALL</a>
                </div>
                
                <div class="row">
                    <div class="col" 
                    v-for="(service, index) in store.services" :key="index">
                        <div class="service">
                            <div class="head">
                                <i class="icon" :class="service.icon"></i>   
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <h3> {{service.name}} </h3>
                            <p> {{service.description}} </p>
                        </div>
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
            .row{
                justify-content: space-between;
                gap: 1em;
                .col{
                    width: calc(100% / 3 - 1em);
                    background-color: $shark-color;
                }
                .service{
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
            } 
        }
    }
}

</style>