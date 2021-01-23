<template>
  <div class="flex flex-col mb-8">
    <div class="flex flex-row items-center">
      <Account size="small"/>
      <span class="opacity-25 ml-6">John Doe</span>
    </div>
    <div class="text-sm mt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque eius quod odio rerum ad rem doloremque facere est nesciunt et hic pariatur aliquam vel veniam, iste nihil eaque molestias.
    </div>
  </div>
</template>

<script>
import Account from '~/components/navigation/Account'

export default {
  components: {
    Account
  }
}
</script>

<style>

</style>
