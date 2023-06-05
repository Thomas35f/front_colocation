<template>
<div class="bg-gray-200 h-screen">
  <div class="container m-auto py-10">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Connectez-vous !</h2>
      <div v-if="error" class="bg-red-200 rounded p-4 w-full my-5">
        <p class="text-red-500 font-bold">{{error}}</p>
      </div>
      <form v-on:submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email" placeholder="Votre email" v-model="form.email">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Mot de passe</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="text" placeholder="Votre mot de passe" v-model="form.password">
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
  name: 'Login',

    data(){
        return{
          error: null,
            form:{
                email: '',
                password: '',
                }
        }
    },
    methods:{
        submitForm(){
            var data = '{"email": "'+this.form.email+'","password": "'+this.form.password+'"}';
                      
            store.dispatch('login', {
                data: data,
            }).then(response => {
              if(response == 'no valid')
              {
                this.error = 'Identifiants non valides. Réessayez.'
              }
            })
        }
    }
  
}
</script>