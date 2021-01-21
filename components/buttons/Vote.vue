<template>
  <button
    class="bg-primary shadow-button py-2 px-4 rounded-2xl button focus:outline-none"
    :class="{'shadow-button-pressed font-semibold': pressed}"
  >
    🙏 <span class="text-xl" v-if="pressed">420</span>
  </button>
</template>

<script>
export default {
  props: {
    pressed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .button {
    transition: all 0.3s ease-in-out;
  }
</style>
