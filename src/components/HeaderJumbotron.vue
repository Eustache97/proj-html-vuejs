<script>
import {store} from "../store";
export default {
    name: "HeaderJumbotron",
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
<div class="header-bottom">
    <div class="jumbotron">
        <div class="container">
            <div class="nav d-flex">
                <div class="logo">
                    <img :src="getImg(store.infos.logo)" alt="">
                </div>
                <div class="navbar">
                    <ul class="d-flex">
                        <li v-for="(link, index) in store.menu" :key="index">
                            <a href=""> {{link}} </a>
                        </li>
                        <div class="get-in">
                            <i class="fa-regular fa-user"></i>
                             <a class="btn btn-primary" href="">Get in touch</a>
                         </div> 
                    </ul>
                </div>
                
            </div>
            <div class="jumbotron-inner">
                <div class="jumbo-content">
                    <span>logistics services</span>
                    <h1>Cargo Transport</h1>
                    <p>Fractional or exclusive road transportation to all regions, with small, medium and large vehicles</p>
                    <a class="start btn btn-primary" href="">get in touch</a>
                    <a class="more btn btn-secondary" href="">read more</a>
                </div>
            </div>
        </div>     
    </div>
   
</div>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
.header-bottom{
    width: 100%;
    background-image: url("../assets/img/bg-9.jpg");
    background-size: cover;
    background-position: center;
    .jumbotron{
        width: 100%;
        background-color: rgba($color: #000000, $alpha: .5);
        .container{
            .nav{
                width: 100%;
                height: 70px;
                padding: .5em;
                .navbar{
                    height: 100%;
                    ul{
                        list-style-type: none;
                        li{
                            a{
                                display: inline-block;
                                text-transform: uppercase;
                                margin-right: 1rem;
                                font-weight: 500;
                            }
                        }
                    }
                    .get-in{
                        i{
                            margin-right: .5em;
                        }
                    }
                }
            }
            .jumbotron-inner{
                width: 100%;
                display: flex;
                justify-content: flex-start;
                padding: 6rem 0;
                .jumbo-content{
                    width: 50%;
                    span{
                        color: $primary-color;
                        text-transform: uppercase;
                    }
                    h1{
                        font-size: 3rem;
                        font-weight: 900;
                        text-transform: uppercase;
                    }
                    p{
                        margin: 1.5rem 0;   
                    }
                    a.start, 
                    a.more{
                        margin-right: 1em;
                    }
                }
            }
        }
    }
}
</style>