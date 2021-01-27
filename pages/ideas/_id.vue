<template>
   <div class="md:grid md:grid-cols-3 gap-4 md:gap-16">
      <Expand
         v-if="!$apollo.queries.idea.loading"
         class="h-64 md:h-auto md:col-span-2 overflow-scroll"
         :idea="idea"
      />
      <Conversation
         class="h-64 md:h-auto w-full my-12 md:my-0"
         v-if="!$apollo.queries.idea.loading"
         :idea_id="idea.id"
      />
   </div>
</template>

<script>
import Expand from '~/components/idea/Expand'
import Conversation from '~/components/chat/Conversation'

import idea from '~/gql/queries/idea'

export default {
   asyncData: ({params}) => ({id: Number(params.id)}),
   apollo: {
      idea : {
         query: idea,
         variables() {
            return {
               id: this.id
            }
         },
      },
   },
   components: {
      Expand,
      Conversation,
   }
}
</script>
