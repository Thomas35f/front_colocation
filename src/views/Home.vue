<template>

<div class="p-4 h-screen bg-gray-200">

  <!-- Si connecté et dépenses créées  -->
  <div v-if="logged && expenses ">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div v-for="expense in expenses.slice().reverse()" :key="expense.id">
        <Card :expense="expense" />
      </div>
    </div>
  </div>

<!-- Si connecté mais aucune dépense faite  -->
  <div v-if="logged && expenses == null" class="h-screen flex items-center justify-center pb-20">
    <div class="flex flex-col gap-4 text-center">
      <h2 class="text-3xl font-bold">Aucune dépense faite</h2>
      <p>Commencez d'abord par créer une catégorie de dépense <a href="/categorie" class="font-bold underline">ici</a>.</p>
      <p>Par la suite, crééz votre dépense <a href="/creer-depense" class="font-bold underline">ici</a> . Vous pourrez ensuite toutes les retrouver sur ce tableau de bord.</p>
    </div>
  </div>
  
  <!-- Si pas connecté  -->
  <div v-if="!logged" class="h-screen flex items-center justify-center pb-20">
    <div class="flex flex-col gap-4 text-center">
      <h1 class="text-3xl font-bold">Bienvenue sur Coloc' Action !</h1>
      <p>Ici, vous pouvez gérer des dépenses avec vos amis. 
        <br>C'est simple, intuitif et sans prise de tête !
      </p>
      <p>Pour commencer, <a href="/register" class="font-bold underline">inscrivez-vous !</a></p>
    </div>
  </div>

</div>
  
</template>

<script>
import axios from 'axios'
import store from '../store'

import Card from '../components/Card.vue'

export default {
  name: 'Home',

  components: {
    Card
  },

  data() {
    return {
      expenses: null,
      logged: false,
    }
  },

  mounted() {
    axios
    .get('http://127.0.0.1:3001/expenses-by-user/'+store.state.id)
    .then((response) => {
      this.expenses = response.data
      if(this.expenses.length == 0)
      {
        this.expenses = null
      }
    })

    if(store.state.email)
    {
      this.logged = !this.logged;
    }
  },
}
</script>