<script>
export default {
    name: "FooterBottom"
}
</script>
<template>
<div class="footer-bottom ">
    <div class="container d-flex">
        <p>Enjoy the low price. We are tracking any intention of piracy</p>
        <p>&copy; 2020 NEXGEN is proudly powered by <span>Codings</span></p>  
    </div>
</div>
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;
.footer-bottom{
    width: 100%;
    font-size: .7rem;
    padding: 1em 0;
    color: $silver-color;
    background-color: $black-color;
    .container{
        p{
            span{
                color: $primary-color;
            }
        } 
    }
    
}
</style>