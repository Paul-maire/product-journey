<template>
  <div
    class="flex items-center justify-center shadow-convex bg-account bg-cover bg-contain text-3xl outline-none focus:outline-none cursor-pointer"
    :class="{
      'h-10 w-10 rounded-lg': small,
      'h-12 w-12 rounded-xl': medium,
      'h-16 w-16 rounded-2xl': large,
    }"
  />
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'medium'
    }
  },
  computed: {
    small() {
      return this.size == 'small'
    },
    medium() {
      return this.size == 'medium'
    },
    large() {
      return this.size == 'large'
    },
  }
}
</script>
