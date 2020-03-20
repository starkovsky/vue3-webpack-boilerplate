<template>
  <div>
    Home Page
    <br>
    <button
      @click="store.commit('increment')">
      Clicked {{ store.state.count }} times.
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    setup() {
        const store = useStore();
        return {
            store
        }
    }
})
</script>

<style>

</style>
