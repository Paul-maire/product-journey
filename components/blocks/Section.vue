<template>
   <div class="pb-24">
      <Label class="mb-8">
         <button class="ml-8 text-sm outline:none focus:outline-none text-separator hover:text-dark transition duration-150 h-8 px-2">Show more</button>
         <button
            @click="shuffle"
            class="ml-8 text-sm outline:none focus:outline-none text-separator hover:text-dark transition duration-150 h-8 px-2"
         >Sort by</button>
      </Label>
      <div v-if="$apollo.queries.ideas.loading" class="">Loading ...</div>
      <transition-group v-else name="flip-list" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" tag="div">
         <Card
            v-for="idea in ideas"
            :key="idea.id"
            :idea="idea"
         />
      </transition-group>
      </div>
</template>

<script>
import ideas from '~/gql/queries/ideas'

import Card from '~/components/idea/Card'
import Label from '~/components/navigation/Label'

import _ from 'lodash'

export default {
   apollo: {
      ideas: {
         query: ideas
      },
   },
   methods: {
      shuffle() {
         return this.ideas = _.shuffle(this.ideas)
      },
   },
   components: {
      Card,
      Label
   }
}
</script>

<style scoped>
.flip-list-move {
   transition: transform 1s;
}
</style>
