<template>
  <button
    class="bg-primary shadow-flat h-12 px-4 bg-contain whitespace-no-wrap rounded-xl hover:shadow-pressed outline-none focus:outline-none font-semibold transition duration-300"
    :class="{'shadow-pressed': pressed}"
  >
    💡 <span v-if="pressed">{{counter}}</span>
  </button>
</template>

<script>
export default {
  props: {
    pressed: {
      type: Boolean,
      default: false
    },
    counter: {
      type: Number,
      default: 0
    }
  }
}
</script>
