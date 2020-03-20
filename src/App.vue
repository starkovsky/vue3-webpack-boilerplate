<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
}
</script>

<style>

</style>
