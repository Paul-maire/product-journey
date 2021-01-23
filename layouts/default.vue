<template>
  <div class="bg-primary h-screen overflow-y-scroll w-screen p-8 md:px-12 md:py-6 xl:px-24 xl:py-12 grid grid-cols-1 grid-rows-6">
    <TopBar class="row-span-2 md:row-span-1"/>
    <Nuxt class="row-span-4 pt-12 md:pt-0 md:row-span-5"/>
  </div>
</template>

<script>
import TopBar from '~/components/navigation/TopBar'

export default {
  components: {
    TopBar
  }
}
</script>

<style>
/* TODO change font */
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.bg-concave {
  background: linear-gradient(135deg, #E4E4E7 0%, #FCFCFF 100%) #E5E5E5;
}
.bg-convex {
  background: linear-gradient(135deg, #FCFCFF 0%, #E4E4E7 100%) #E5E5E5;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 150ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
