<template>
  <div class="bg-primary shadow-card rounded-2xl p-8 flex flex-col flex-no-wrap mx-8">
    <div class="flex flex-row flex-no-wrap text-2xl mb-4 w-full justify-between items-center">
      <h2 class="text-black font-semibold">Add new filter</h2>
      <Vote />
    </div>
    <p class="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, corporis minus eaque molestias cupiditate quaerat, commodi ...</p>
  </div>
</template>

<script>
import Vote from '~/components/buttons/Vote'

export default {
  components : {
    Vote
  }
}
</script>
