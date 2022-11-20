<script>
import {store} from "../store";
import SectionAbout from "./SectionAbout.vue";
import SectionServices from "./SectionServices.vue";
export default {
    name: "AppMain",
    components: {
        SectionAbout,
        SectionServices
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
  <SectionAbout />
  <SectionServices />
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;

</style>