<template>
    <div class="pb-24">
      <Label />
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div v-if="$apollo.queries.ideas.loading" class="">Loading ...</div>
        <Card
          v-else
          v-for="idea in ideas"
          :key="idea.id"
          :idea="idea"
        />
        <div v-if="$apollo.queries.ideas.loading" class="">Loading ...</div>
        <Card
          v-else
          v-for="idea in ideas"
          :key="idea.id"
          :idea="idea"
        />
        <div v-if="$apollo.queries.ideas.loading" class="">Loading ...</div>
        <Card
          v-else
          v-for="idea in ideas"
          :key="idea.id"
          :idea="idea"
        />
        <div v-if="$apollo.queries.ideas.loading" class="">Loading ...</div>
        <Card
          v-else
          v-for="idea in ideas"
          :key="idea.id"
          :idea="idea"
        />
      </div>
   </div>
</template>

<script>
import ideas from '~/gql/queries/ideas'

import Card from '~/components/Card'
import Label from '~/components/Label'

export default {
  apollo: {
    ideas: {
      query: ideas
    }
  },
  components: {
    Card,
    Label
  }
}
</script>
