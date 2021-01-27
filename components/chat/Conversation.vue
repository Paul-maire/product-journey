<template>
   <div class="shadow-concave bg-concave bg-contain rounded-2xl px-8 pb-12 relative overflow-y-scroll flex flex-col-reverse">
      <Comment
         class="sticky bottom-0 h-24 w-full rounded-xl"
         :idea_id="idea_id"
      />
      <div class="h-full overflow-y-scroll pt-12">
         <Message
            v-for="message in comments"
            :key="message.id"
            :message="message"
         />
      </div>
   </div>
</template>

<script>
import Message from '~/components/chat/Message'
import Comment from '~/components/chat/Comment'

import Comments from '~/gql/queries/comments'

export default {
   props: {
      idea_id: {
         type: Number,
         required: true,
      },
   },
   apollo: {
      comments: {
         query: Comments,
         variables() {
            return {
               idea_id: this.idea_id
            }
         },
      }
   },
   components: {
      Message,
      Comment
   }
}
</script>
