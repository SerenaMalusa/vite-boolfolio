<script>
import axios from "axios";
import ProjectCard from "../cards/ProjectCard.vue";

export default {
  data() {
    return {
      title: "Welcome to my projects!",
      projects: [],
      links: [],
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    fecthProjects(endpoint = `http://127.0.0.1:8000/api/projects`) {
      axios.get(endpoint).then((res) => {
        // console.log(res.data.links);
        this.projects = res.data.data;
        this.links = res.data.links;
      });
    },
  },

  mounted() {
    this.fecthProjects();
  },
};
</script>

<template>
  <h1 class="my-5">{{ title }}</h1>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li v-for="(link, i) in links" class="page-item">
        <a
          @click="fecthProjects(link.url)"
          v-html="link.label"
          :class="{
            active: link.active,
            disabled: !link.url,
          }"
          class="page-link"
        ></a>
      </li>
    </ul>
  </nav>

  <div class="row g-3">
    <project-card
      v-for="project in projects"
      :project="project"
      :isDetail="false"
    ></project-card>
  </div>
</template>

<style lang="scss" scoped></style>
