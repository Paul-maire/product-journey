<template>
   <div @click="redirect" class="bg-primary shadow-flat bg-contain rounded-2xl p-8 cursor-pointer">
      <div class="flex text-xl w-full justify-between items-center mb-4">
         <h2 class="text-black font-semibold text-base">{{ idea.title }}</h2>
         <Vote
            class="ml-auto"
            @click.native.stop="voted"
            :pressed="idea.vote"
            :counter="idea.votes_count"
         />
      </div>
      <p class="text-black text-sm">{{ idea.content | truncate}}</p>
   </div>
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
   computed: {
      idea_link() {
         return `/ideas/${this.idea.id}`
      }
   },
   methods: {
      voted() {
         this.idea.vote = !this.idea.vote
      },
      redirect() {
         return this.$router.push(this.idea_link)
      }
   },
   filters: {
      truncate(value) {
         return value.length > 250 ? `${value.substring(0, 247)}...` : value
      }
   },
   components: {
      Vote
   }
}
</script>
