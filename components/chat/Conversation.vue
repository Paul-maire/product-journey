<template>
   <div class="shadow-concave bg-concave bg-contain rounded-2xl px-8 pb-12 relative overflow-y-scroll flex flex-col-reverse">
      <Comment
         class="sticky bottom-0 h-24 w-full rounded-xl"
         :idea_id="idea_id"
         @submit="submit"
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
import CommentSaved from '~/gql/subscriptions/comment-saved'
import SaveComment from '~/gql/mutations/save-comment'

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
         subscribeToMore: {
            document: CommentSaved,
            updateQuery: ({ comments }, { subscriptionData }) => comments.push(subscriptionData.data.commentAdded),
         }
      },
   },
   methods: {
      submit(comment) {
         this.$apollo.mutate({
            mutation: SaveComment,
            variables: {
               comment,
            },
         })
      }
   },
   components: {
      Message,
      Comment
   }
}
</script>
