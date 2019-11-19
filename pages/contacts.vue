<template>
  <div class="contacts-page">
    <div class="container-fluid">
      <div class="row">
        <div class="contacts__card col-12 col-sm-4" v-for="(i,y) in users" :key="y">
          <div>
            {{ i.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        users: null
      }
    },
    async asyncData({ $axios }) {
      const data = await $axios.get('https://jsonplaceholder.typicode.com/users');
      return { users: data.data}
    }
  }
</script>
