<template>
  <button
    class="bg-primary shadow-button py-2 px-4 rounded-2xl hover:shadow-button-pressed focus:outline-none"
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
