<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-4 mb-16 md:mb-32">
    <nuxt-link to="/" class="text-black tracking-wide text-2xl mx-auto md:mx-0 md:my-auto h-16 align-middle">💡 HIHAI</nuxt-link>
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
