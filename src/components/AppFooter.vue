<script>
import {store} from "../store";
import FooterTop from "./FooterTop.vue";
import FooterBottom from "./FooterBottom.vue";
export default {
    name: "AppFooter",
    components: {
        FooterTop,
        FooterBottom
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <FooterTop />
    <FooterBottom />
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;

</style>