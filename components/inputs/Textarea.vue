<template>
   <textarea
      @input="$emit('input', value)"
      class="resize-none shadow-concave bg-concave text-base rounded-2xl px-8 outline-none focus:outline-none p-8"
      :placeholder="placeholder"
   />
</template>

<script>
export default {
   props: {
      value: {
         type: String
      },
      placeholder: {
         type: String
      }
   }
}
</script>
