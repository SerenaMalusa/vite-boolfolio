<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Hello world!",
      tech_badges: [],
    };
  },

  methods: {
    fecthProjects() {
      axios.get(`http://127.0.0.1:8000/api/projects`).then((res) => {
        console.log(res.data.data);
        this.tech_badges = res.data.data[0].technologies_badges;
      });
    },
  },

  mounted() {
    this.fecthProjects();
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div></div>
  </div>
</template>

<style lang="scss">
/* import file general.scss*/
@use "./styles/general.scss";
</style>
