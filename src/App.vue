<script>
import {store} from "./store";
import AppHeader from "./components/AppHeader.vue";
export default {
    components:{
        AppHeader
    },
    data() {
        return{
            store
        }
    }
}
</script>
<template>
    <header>
      <AppHeader />  
    </header>
</template>
<style lang="scss">
@use "./styles/general.scss"as*;
header{
    width: 100%;
    color: $white-color;
}
</style>
