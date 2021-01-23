<template>
  <div class="shadow-concave bg-concave rounded-2xl p-12">
    <Message />
    <Message />
    <Message />
    <Message />
  </div>
</template>

<script>
import Message from '~/components/chat/Message'
export default {
  components: {
    Message
  }
}
</script>
