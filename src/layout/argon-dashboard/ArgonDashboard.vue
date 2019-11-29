<template>
  <div id="app">
    <notifications></notifications>
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue";
import ArgonDashboard from '@/plugins/argon-dashboard'
Vue.use(ArgonDashboard)
export default {
    name: 'ArgonDashboard'
}
</script>
