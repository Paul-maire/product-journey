<template>
  <div class="md:grid md:grid-cols-3 gap-4 md:gap-16">
    <Expand class="h-64 md:h-auto md:col-span-2 overflow-scroll" />
    <Conversation class="h-64 md:h-auto w-full my-12 md:my-0" />
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
