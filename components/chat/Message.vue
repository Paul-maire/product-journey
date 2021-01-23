<template>
   <div class="flex flex-col mb-8 px-4">
      <div class="flex flex-row items-center">
         <Account size="small"/>
         <span class="opacity-25 ml-6">John Doe</span>
      </div>
      <div class="text-sm mt-4">
         {{ message.content }}
      </div>
    </div>
</template>

<script>
import Account from '~/components/navigation/Account'

export default {
   props: {
      message: {
         type: Object,
         required: true
      }
   },
   components: {
      Account
   }
}
</script>
