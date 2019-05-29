<template>
  <nav class="navbar navbar-dark bg-dark">

    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">MyProject</router-link>
    </div>

    <ul class="nav navbar-nav">
      <router-link to="/about" class="navbar-item">About</router-link>
      <router-link to="/posts" class="navbar-item">Posts</router-link>
    </ul>

  </nav>
</template>


<script>
export default {
  name: 'app-nav'
};
</script>

<style scoped>

</style>
