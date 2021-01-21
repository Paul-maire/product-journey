<template>
    <div class="pb-24">
      <Label />
      <div class="flex flex-row flex-no-wrap">
        <Card />
        <Card/>
        <Card />
      </div>
   </div>
</template>

<script>
import Card from '~/components/Card'
import Label from '~/components/Label'

export default {
  components: {
    Card,
    Label
  }
}
</script>
