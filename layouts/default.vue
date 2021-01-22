<template>
  <div class="bg-primary h-screen overflow-y-scroll w-screen p-8 md:p-12  xl:p-24 ">
    <TopBar />
    <Nuxt />
  </div>
</template>

<script>
import TopBar from '~/components/TopBar'

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
  background: linear-gradient(135deg, #E4E4E7 0%, #FCFCFF 100%);
}
.bg-convex {
  background: linear-gradient(135deg, #FCFCFF 0%, #E4E4E7 100%);
}
</style>
