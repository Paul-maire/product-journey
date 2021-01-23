<template>
  <div class="w-full h-fit grid grid-cols-1 md:grid-cols-4">
    <nuxt-link to="/" class="text-black tracking-wide text-2xl mx-auto md:mx-0 h-16 align-middle flex items-center">💡 HIHAI</nuxt-link>
    <Search
      class="col-span-2 my-6 md:my-0"
    />
    <div class="grid grid-cols-2">
      <New class="md:ml-auto" />
      <Account size="large" class="ml-auto "/>
    </div>
  </div>
</template>

<script>
import New from '~/components/idea/New'
import Account from '~/components/navigation/Account'
import Search from '~/components/navigation/Search'

export default {
  components: {
    New,
    Account,
    Search,
  }
}
</script>
