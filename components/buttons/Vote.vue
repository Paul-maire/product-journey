<template>
  <button
    class="bg-primary shadow-flat h-8 w-16 whitespace-no-wrap rounded-xl hover:shadow-pressed outline-none focus:outline-none font-semibold text-sm"
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
