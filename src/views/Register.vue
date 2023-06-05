<template>
<div class="bg-gray-200 h-screen">
  <div class="container m-auto py-10">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Inscrivez-vous !</h2>
      <div v-if="error" class="bg-red-200 rounded p-4 w-full my-5">
        <p class="text-red-500 font-bold">{{error}}</p>
      </div>
      <form v-on:submit.prevent="submitForm">
        <div class="flex flex-row gap-3">
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">Prénom</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstname" type="text" placeholder="Votre prénom" required v-model="form.firstName">
            </div>
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">Nom</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname" type="text" placeholder="Votre nom" required v-model="form.lastName">
            </div>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email" placeholder="Votre email" required v-model="form.email">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Mot de passe</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="text" placeholder="Votre mot de passe" required v-model="form.password">
        </div>
        <div class="flex justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Envoyer
          </button>
        </div>
        <div class="text-center mt-4">
            <a href="/login" class="mx-auto underline rounded-md text-sm font-medium">Déjà inscrit ? Connectez-vous !</a>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import store from '../store'

export default {
  name: 'Register',

    data(){
        return{
            error: null,
            form:{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                }
        }
    },
    methods:{
        submitForm(){

            var data = '{"firstName": "'+this.form.firstName+'","lastName": "'+this.form.lastName+'","email":"'+this.form.email+'","password" : "'+this.form.password+'"}';

            axios.post('http://127.0.0.1:3001/users', data)
                 .then((res) => {
                    
                    if(res.data == 'email no valid')
                    {
                        this.error = 'Email déjà existant. Choisissez-en un autre.'
                    }else
                    {
                        var data = '{"email": "'+this.form.email+'","password": "'+this.form.password+'"}';
                        store.dispatch('login', {
                        data: data,
                        })
                    }
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                     
                 });
        }
    }
  
}
</script>

<style scoped>

</style>
