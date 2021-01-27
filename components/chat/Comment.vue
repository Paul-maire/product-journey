<template>
   <textarea
      class="resize-none bg-concave shadow-concave p-4 outline-none text-center align-middle focus:outline-none focus:text-left focus:align-top text-sm bg-contain"
      placeholder="Press space to comment"
      v-model="content"
      @keyup.enter="submit"
   />
</template>

<script>
export default {
   props: {
      idea_id: {
         type: Number,
         required: true
      }
   },
   data() {
      return {
         content: null
      }
   },
   computed: {
      comment() {
         return {
            idea_id: this.idea_id,
            content: this.content
         }
      }
   },
   methods: {
      submit() {
         this.$emit('submit', this.comment)
      }
   },
}
</script>
