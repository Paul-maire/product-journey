<template>
  <div class="bg-primary shadow-flat rounded-2xl p-8">
    <div class="flex flex-row flex-no-wrap text-xl w-full justify-between items-center">
      <h2 class="text-black font-semibold text-base">{{idea.title}}</h2>
      <Vote :counter="idea.votes_count"/>
    </div>
    <p class="text-black text-sm">{{idea.content}}</p>
  </div>
</template>

<script>
import Vote from '~/components/buttons/Vote'

export default {
  props: {
    idea: {
      type: Object,
      required: true
    }
  },
  components: {
    Vote
  }
}
</script>
