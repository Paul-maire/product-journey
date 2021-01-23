<template>
   <div class="grid grid-cols-1 xl:grid-cols-4 grid-rows-6">
      <InputText
         class="xl:col-start-2 col-span-2"
         v-model="idea.title"
         placeholder="Title"
      />
      <InputTextarea
         placeholder="Share your idea"
         class="xl:col-start-2 col-span-2 row-span-4"
         v-model="idea.content"
      />
      <Vote @click.native.stop="submit" class="xl:col-start-2 col-span-2 w-16 text-2xl h-16 mx-auto mt-auto"/>
   </div>
</template>

<script>
import InputText from '~/components/inputs/Text'
import InputTextarea from '~/components/inputs/Textarea'
import Vote from '~/components/idea/Vote'

import SaveIdea from '~/gql/mutations/save-idea'

export default {
   data: () => ({
      idea: {
         title: null,
         content: null
      }
   }),
   methods: {
      async submit() {
         const result = await this.$apollo.mutate({
            mutation: SaveIdea,
            variables: {
               idea: this.idea,
            },
         }).catch(console.error)
         console.log(result)

         if (result?.data?.saveIdea) return this.$router.push('/')
      }
   },
   components: {
      InputText,
      InputTextarea,
      Vote,
   }
}
</script>
