<template>
   <div class="grid grid-cols-4 grid-rows-6">
      <InputText class="col-start-2	col-span-2" v-model="title" />
      <InputTextarea class="col-start-2 col-span-2 row-span-4" v-model="content" />
      <Vote class="col-start-2 col-span-2 w-16 text-2xl h-16 mx-auto mt-auto"/>
   </div>
</template>

<script>
import InputText from '~/components/inputs/Text'
import InputTextarea from '~/components/inputs/Textarea'
import Vote from '~/components/idea/Vote'

export default {
   data: () => ({
      title: null,
      content: null
   }),
   components: {
      InputText,
      InputTextarea,
      Vote,
   }
}
</script>
