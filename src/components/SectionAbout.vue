<script>
import {store} from "../store";
export default {
    name: "SectionAbout",
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
<section id="about">
    <div class="container">
        <div class="div-about">
            <div class="description">
                <h4>Who are we</h4>
                <h2><span><i class="fa-regular fa-gem"></i>Exellence</span>  in Transport</h2>
                <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis, molestias at eum placeat illo eaque veritatis, facere cum blanditiis dignissimos officiis aliquid quo expedita atque praesentium est error mollitia!</p>
                <p class="mb-1">Praesent fringilla quis massa et placerat. Mauris eu dui eget urna pellentesque gravida vitae quis nibh.Ut at augue tortor. Pellentesque quis suscipit magna.</p>
                <p class="cit mb-1"><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia eaque consequatur vitae aliquam, iure dicta excepturi soluta animi odio! Mollitia assumenda laboriosam dolorum non eos tempore, illum ab reprehenderit.</em> </p>
                <p class="mb-1"> Minima officia eaque consequatur vitae aliquam, iure dicta excepturi soluta animi odio</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Mauris eu dui eget urna pellentesque gravida vitae</li>
                    <li>Minima officia eaque consequatur vitae</li>
                    <li>Mollitia assumenda laboriosam dolorum non eos tempore</li>
                    <li>Minima officia eaque consequatur vitae</li>
                </ul>
            </div>
            <div class="vehicles-and-certifications">
                <div class="vehicles">
                    <h3 class="mb-1">Vehicles Types</h3>
                    <div class="vehicle d-flex"
                    v-for="(item, index) in store.vehicles" :key="index">
                        <div class="cargo">
                          <img :src="getImg(item.image)" alt="">  
                        </div>
                        <div class="specifics">
                            <h3> {{item.type}} </h3>
                            <p class="mt-05"> {{item.caracteristique}} </p>
                        </div>
                    </div>
                </div>
                <div class="certifications">
                    <h3 class="mb-1">Certifications</h3>
                    <div class="certificate d-flex">
                        <img src="../assets/img/certificate.png" alt="">
                        <img src="../assets/img/certificate.png" alt="">
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
section#about{
    width: 100%;
    padding: 5em 0;
    .div-about{
        width: 100%;
        display: flex;
        .description{
            width: 70%;
            padding-right: 2em;
            color: $silver-color;
            h4{
                color: $primary-color;
                text-transform: uppercase;
            }
            h2{
                margin: 1em 0;
                font-size: 2rem;
                color: $dark-color;
                span{
                    background-color: rgba($color: $primary-color, $alpha: .2);
                    color: $primary-color;
                }
            }
            p.cit{
                padding-left: 1em;
                border-left: 2px solid  rgba($color: $primary-color, $alpha: .2);
            }
            ul{
                list-style-type: circle;
                line-height: 2em;
            }
        }
        .vehicles-and-certifications{
            width: 30%;
            .vehicles{
                margin-bottom: 2em;
            }
            .vehicle{
                padding: 1em 0;
                border-bottom: 1px solid $silver-color;
                .cargo{
                    width: 30%;
                    padding: .5em;
                    background-color: lightblue;
                }
                .specifics{
                    width: 70%;
                    padding: .5em;
                    p{
                        color: $silver-color;

                    }
                }
            }
            .certifications{
                width: 100%;
                .certificate{
                    height: 90px;
                    padding-right: 80px;
                    img{
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>