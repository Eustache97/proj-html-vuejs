<script>
import {store} from "../store";
import SectionAbout from "./SectionAbout.vue";
import SectionServices from "./SectionServices.vue";
import SectionProcess from "./SectionProcess.vue";
import SectionResults from "./SectionResults.vue";
import SectionFeedback from "./SectionFeedback.vue";
export default {
    name: "AppMain",
    components: {
        SectionAbout,
        SectionServices,
        SectionProcess,
        SectionResults,
        SectionFeedback
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
  <SectionProcess />
  <SectionResults />
  <SectionFeedback />
</template>
<style lang="scss">
@use "../styles/partials/variables.scss"as*;

</style>