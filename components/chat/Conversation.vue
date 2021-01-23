<template>
  <div class="shadow-concave bg-concave rounded-2xl px-12 pb-12 relative overflow-y-scroll flex flex-col-reverse">
    <Comment class="sticky bottom-0 h-24 w-full rounded-xl" />
    <div class="h-full overflow-y-scroll pt-12">
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  </div>
</template>

<script>
import Message from '~/components/chat/Message'
import Comment from '~/components/chat/Comment'

export default {
  components: {
    Message,
    Comment
  }
}
</script>
