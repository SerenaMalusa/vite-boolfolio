<script setup></script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">Home</a> -->
      <router-link :to="{ name: 'home' }" class="navbar-brand"
        >Home</router-link
      >
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
