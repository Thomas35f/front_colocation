<template>

Book
</template>

<script>
import axios from 'axios'
// import store from '../store'
// import 'flowbite';

export default {
  name: 'Book',

mounted() {
    axios
      .get('http://127.0.0.1:3001/books')
      .then((response) => {
        console.log(response.data)
      })
  },

  created() {
     console.log(this.$route.params.id + '   DFVV')
  }
  
}
</script>

<style scoped>

</style>
