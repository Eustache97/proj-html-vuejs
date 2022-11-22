<script>
import {store} from "../store";
export default {
    name: "SectionMessage",
    data() {
        return {
            store
        }
    }
}
</script>
<template>
<section id="get-in-touch">
    <div class="container">
        <div class="div-get_in d-flex">
            <div class="send-message">
                <h4>send a message</h4>
                <h2>Get in <span>Touch</span></h2>
                <p class="mb-2">We will respond to your message as soon as possible</p>
                <div class="form">
                    <div class="row mb-1">
                        <div class="col">
                            <label for="name">Il tuo nome</label>
                            <input type="text" id="name" placeholder="Il tuo nome">
                        </div>
                        <div class="col">
                            <label for="email">La tua email</label>
                            <input type="text" id="email" placeholder="La tua email">
                        </div>
                        <div class="col">
                            <label for="phone">Numero di telefono</label>
                            <input type="number" id="phone" placeholder="numero di telefono">
                        </div>
                        <div class="col">
                            <select name="more-info" id="more">
                                <option value="disabled">more infos</option>
                            </select>  
                        </div>   
                    </div>
                    <label for="description"></label>
                    <textarea class="mb-1" name="your-description" id="description" cols="30" rows="10" placeholder="scrivi il tuo messaggio"></textarea>
                </div>
                <a class="btn btn-primary" href="">send</a>
            </div>
            <div class="info-entity">
                <h3>Example Inc.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Praesent diam lacus, dapibus sed imperdiet consectetur</p>
                <div class="reference"><i class="fa-solid fa-phone icon"></i><a href=""> {{store.infos.phoneNumber}} </a></div>
                <div class="reference"><i class="fa-solid fa-envelope icon"></i><a href=""> {{store.infos.email}} </a></div>
                <div class="reference"><i class="fa-solid fa-location-dot icon"></i><a href=""> {{store.infos.side}} </a></div>
                <a class="btn btn-secondary" href="">view map</a>
            </div>
        </div>
    </div>
    
</section>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
section#get-in-touch{
    width: 100%;
    padding: 5em 0;
    .container{
        .div-get_in{
            width: 100%;
            align-items: flex-start;
            .send-message{
                width: 70%;
                padding-right: 2em;
                p{
                    color: $silver-color;
                }
                .form{
                    width: 100%;
                    .row{
                        justify-content: space-between;
                        gap: 1em;
                        .col{
                            width: calc(100% / 2 - 1em);
                            label{
                                display: none;
                            }
                            input, select{
                                width: 100%;
                                border-radius: 5px;
                                padding: .5em;
                            }
                            
                        }
                    }
                    textarea{
                        width: 100%;
                        border-radius: 5px;
                    }
                }
                a.btn.btn-primary{
                    color: $white-color;
                }
                
            }
            .info-entity{
                width: 30%;
                p{
                    color: $silver-color;
                    margin: 2em 0;
                }
                .reference{
                    width: 100%;
                    margin-bottom: 1em;
                    .icon{
                        display: inline-block;
                        border-radius: 50%;
                        padding: 1em;
                        margin-right: 1em;
                        color: $primary-color;
                        background-color: rgba($color: $primary-color, $alpha: .2)
                    }
                    a{
                        color: $primary-color;
                    }
                }
                a.btn.btn-secondary{
                    color: $primary-color;
                }
                
            }
        }
    }

}
</style>