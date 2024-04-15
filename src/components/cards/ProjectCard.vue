<script>
export default {
  data() {
    return {};
  },
  props: {
    project: Object,
    isDetail: Boolean,
  },
};
</script>

<template>
  <div class="col-4">
    <div class="card h-100">
      <img
        v-if="project.image"
        :src="project.image"
        class="card-img-top"
        alt="project related picture"
      />
      <div class="card-body">
        <h5 v-if="!isDetail" class="card-title text-capitalize">
          {{ project.title }}
        </h5>
        <p class="card-text">{{ project.description }}</p>
        <h6 class="d-inline me-2">Type:</h6>
        <span
          v-if="project.type"
          class="badge"
          :style="`background-color:${project.type.colour};`"
          >{{ project.type.name }}</span
        >
        <div v-if="project.technologies && project.technologies.length > 0">
          <h6 class="mt-3">Technologies:</h6>
          <span
            v-for="technology in project.technologies"
            class="badge me-1"
            :style="`background-color:${technology.colour};`"
            >{{ technology.name }}</span
          >
        </div>

        <router-link
          v-if="!isDetail"
          :to="{ name: 'projects.show', params: { slug: project.slug } }"
          class="btn btn-primary mt-3"
          >See more</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
