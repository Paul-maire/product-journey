<template>
  <div class="w-full grid grid-cols-4 px-4 mb-32">
    <h1 class="text-black text-3xl my-auto">💡 HIHAI</h1>
    <Search
      class="col-span-2"
    />
    <div class="grid grid-cols-2">
      <NewIdea class="ml-auto" />
      <Account class="ml-auto"/>
    </div>
  </div>
</template>

<script>
import NewIdea from '~/components/buttons/NewIdea'
import Account from '~/components/buttons/Account'
import Search from '~/components/Search'

export default {
  components: {
    NewIdea,
    Account,
    Search,
  }
}
</script>
