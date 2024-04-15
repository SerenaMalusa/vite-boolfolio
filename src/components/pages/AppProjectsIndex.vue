<script>
import axios from "axios";
import ProjectCard from "../cards/ProjectCard.vue";

export default {
  data() {
    return {
      title: "Hello world!",
      projects: [],
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    fecthProjects() {
      axios.get(`http://127.0.0.1:8000/api/projects`).then((res) => {
        console.log(res.data.data);
        this.projects = res.data.data;
      });
    },
  },

  mounted() {
    this.fecthProjects();
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="row g-3">
    <project-card v-for="project in projects" :project="project"></project-card>
  </div>
</template>

<style lang="scss" scoped></style>
