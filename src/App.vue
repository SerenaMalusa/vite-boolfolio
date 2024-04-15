<script>
import AppHeader from "./components/layout/AppHeader.vue";
import AppProjectsIndex from "./components/pages/AppProjectsIndex.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppProjectsIndex,
    AppHeader,
  },
};
</script>

<template>
  <app-header />

  <div class="container">
    <router-view></router-view>
    <!-- <app-projects-index /> -->
  </div>
</template>

<style lang="scss">
/* import file general.scss*/
@use "./styles/general.scss";
</style>
