<template>
<div class="bg-gray-200 h-screen">
  <div class="container m-auto py-10">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Ajouter une catégorie de dépense</h2>
      <form v-on:submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="category">Nom de la catégorie</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category" type="text" placeholder="Votre catégorie" v-model="form.category">
        </div>
        <div class="flex justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import store from '../store'

export default {
  name: 'Category',

    data(){
        return{
            form:{
                category: '',
                }
        }
    },
    methods:{
        submitForm(){
            var data = '{"title": "'+this.form.category+'"}';
                      
            store.dispatch('sendCategory', {
                data: data,
            })      
        }
    }
  
}
</script>