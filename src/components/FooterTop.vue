<script>
import {store} from "../store";
export default {
    name: "FooterTop",
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="footer-top ">
        <div class="container d-flex">
            <div class="info-entity">
                <div class="logo">
                    <h2><span>Nex</span>Gen</h2>
                </div>
                <p>A functional HTML template for Corporate & Business</p>
                <div class="reference"><i class="fa-solid fa-phone"></i><span> {{store.infos.phoneNumber}} </span></div>
                <div class="reference"><i class="fa-solid fa-envelope"></i><span> {{store.infos.email}} </span></div>
                <div class="reference"><i class="fa-solid fa-location-dot"></i><span> {{store.infos.side}} </span></div>
                <a class="btn btn-secondary" href="">Get in touch</a>
            </div>
            <div class="footer-links">
                <div class="row">
                    <div class="col"
                    v-for="(item, index) in store.footerlinks" :key="index">
                        <div class="card">
                            <h3 class="mb-1"> {{item.title}} </h3>
                            <ul>
                                <li v-for="(link, index2) in item.links" :key="index2">
                                    <i class="fa-solid fa-chevron-right"></i><a href=""> {{link}} </a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
.footer-top{
    width: 100%;
    padding: 5em 0;
    background-color: $dark-color;
    .container{
        .info-entity{
            width: 30%;
            padding-right: 2em;
            p{
                margin: 1em 0;
            }
            .reference{
                width: 100%;
                margin-bottom: 1em;
                i{
                    color: $white-color;
                    margin-right: .5em;
                }
            }
            a.btn.btn-secondary{
                color: $white-color;
            }
        }
        .footer-links{
            width: 70%;
            .row{
                justify-content: space-between;
                gap: 1em;
                .col{
                    width: calc(100% / 3 - 1em);
                    background-color: $shark-color;
                    border-radius: 5px;
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
                }
            }

        }
    }
}
</style>

