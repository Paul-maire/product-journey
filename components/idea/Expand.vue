<template>
   <div class="shadow-flat bg-primary bg-contain rounded-2xl p-12 grid grid-cols-1 gird-rows-6">
      <div class="flex items-center mb-12">
         <Account />
         <span class="ml-8">Janne Doe have this idea 💡</span>
         <Vote
            class="ml-auto"
         />
      </div>
      <div class="row-span-5 pb-12">
         {{ idea.content }}
      </div>
   </div>
</template>

<script>
import Account from '~/components/navigation/Account'
import Vote from '~/components/idea/Vote'

export default {
   props: {
      idea: {
         type: Object,
         required: true
      }
   },
   components: {
      Account,
      Vote,
   }
}
</script>
