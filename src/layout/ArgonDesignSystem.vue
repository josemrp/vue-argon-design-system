<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>
import Vue from "vue";
import Argon from "@/plugins/argon-kit";
Vue.use(Argon);
import { FadeTransition } from "vue2-transitions";
export default {
    name: 'ArgonDesignSystem',
    components: {
        FadeTransition
    }
}
</script>

<style>

</style>