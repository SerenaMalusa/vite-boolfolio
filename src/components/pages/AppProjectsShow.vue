<script>
import axios from "axios";
import { resolveComponent } from "vue";
import ProjectCard from "./../cards/ProjectCard.vue";

export default {
  data() {
    return {
      project: {},
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    fecthProject() {
      axios
        .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
        .then((res) => {
          this.project = res.data;
          //   console.log(res.data);
        });
    },
  },

  mounted() {
    this.fecthProject();
  },
};
</script>

<template>
  <!-- <h1>{{ $route.params.slug }}</h1> -->

  <h1 class="my-4">{{ project.title }}</h1>
  <project-card
    v-if="project"
    :project="project"
    :isDetail="true"
  ></project-card>
</template>

<style lang="scss" scoped></style>
