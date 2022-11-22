<script>
import {store} from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
    components:{
        AppHeader,
        AppMain,
        AppFooter
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
    <main>
        <AppMain />
    </main>
    <footer>
        <AppFooter />
    </footer>
</template>
<style lang="scss">
@use "./styles/general.scss"as*;
header{
    width: 100%;
    color: $white-color;
}
footer{
    width: 100%;
    color: $silver-color;   
}
</style>
