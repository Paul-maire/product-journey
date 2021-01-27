<template>
   <input
      type="text"
      @input="$emit('input', $event.target.value)"
      :value="value"
      class="shadow-concave bg-concave h-16 text-base rounded-2xl px-8 outline-none focus:outline-none"
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
