<template>
  <nuxt-link to="/idea" class="bg-primary shadow-flat bg-contain rounded-2xl p-8">
    <div class="flex text-xl w-full justify-between items-center mb-4">
      <h2 class="text-black font-semibold text-base">{{idea.title}}</h2>
      <Vote
        class="ml-auto"
        @click="voted"
        :pressed="idea.vote"
        :counter="idea.votes_count"
      />
    </div>
    <p class="text-black text-sm">{{idea.content}}</p>
  </nuxt-link>
</template>

<script>
import Vote from '~/components/idea/Vote'

export default {
  props: {
    idea: {
      type: Object,
      required: true
    }
  },
  methods: {
    voted() {
      this.idea.vote = !this.idea.vote
    }
  },
  components: {
    Vote
  }
}
</script>
