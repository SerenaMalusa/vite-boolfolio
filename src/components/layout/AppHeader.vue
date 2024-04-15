<script></script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">Home</a> -->
      <router-link :to="{ name: 'home' }" class="navbar-brand"
        >Home</router-link
      >

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'projects.index' }"
            >All projects</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
