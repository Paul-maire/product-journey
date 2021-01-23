<template>
  <div class="grid grid-cols-3 gap-16">
    <Expand class="col-span-2 overflow-scroll" />
    <Conversation class="overflow-scroll" />
  </div>
</template>

<script>
import Expand from '~/components/idea/Expand'
import Conversation from '~/components/chat/Conversation'

export default {
  components: {
    Expand,
    Conversation,
  }
}
</script>
