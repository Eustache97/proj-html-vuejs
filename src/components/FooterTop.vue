<script>
import {store} from "../store";
import AppCardFooterLinks from "./AppCardFooterLinks.vue";
export default {
    name: "FooterTop",
    components: {
        AppCardFooterLinks
    },
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
                <div class="reference"><i class="fa-solid fa-phone"></i><a href=""> {{store.infos.phoneNumber}} </a></div>
                <div class="reference"><i class="fa-solid fa-envelope"></i><a href=""> {{store.infos.email}} </a></div>
                <div class="reference"><i class="fa-solid fa-location-dot"></i><a href=""> {{store.infos.side}} </a></div>
                <a class="btn btn-secondary" href="">Get in touch</a>
            </div>
            <div class="footer-links">
                <div class="row">
                    <div class="col"
                    v-for="(element, index) in store.footerlinks" :key="index">
                        <AppCardFooterLinks :item="element"/>
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
                }
            }

        }
    }
}
</style>

