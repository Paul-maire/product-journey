<template>
   <div class="shadow-concave bg-concave bg-contain rounded-2xl px-8 pb-12 relative overflow-y-scroll flex flex-col-reverse">
      <Comment class="sticky bottom-0 h-24 w-full rounded-xl" />
      <div class="h-full overflow-y-scroll pt-12">
         <Message
            v-for="message in conversation"
            :key="message.id"
            :message="message"
         />
      </div>
   </div>
</template>

<script>
import Message from '~/components/chat/Message'
import Comment from '~/components/chat/Comment'

export default {
   props: {
      conversation: {
         type: Array,
         required: true
      }
   },
   components: {
      Message,
      Comment
   }
}
</script>
