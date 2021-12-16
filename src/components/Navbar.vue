<template>
  <div class="nav">
    <p>NEWS OO</p>
    <router-link :to="{ name: 'General', params: { name: 'general' } }"
      >General</router-link
    >
    <router-link :to="{ name: 'Tech', params: { name: 'technology' } }"
      >Technology</router-link
    >
    <router-link :to="{ name: 'Sports', params: { name: 'sports' } }"
      >Sports</router-link
    >
    <router-link
      :to="{ name: 'Entertainment', params: { name: 'entertainment' } }"
      >Entertainment</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
