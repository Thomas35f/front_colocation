<template>
<div class="bg-gray-200 h-screen">
  <div class="container m-auto py-10">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Faites une nouvelle dépense !</h2>
      <form v-on:submit.prevent="submitForm">

         <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="from_user">Qui a payé ?</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="from_user" type="text" placeholder="Nom" v-model="form.from_user">
        </div>

        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="category">Catégorie choisie</label>  
            <select id="fruit" v-model="form.category" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option  v-for="category in categories" :key="category.id" :value="category.title">{{ category.title }}</option>
            </select>
        </div>

    <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="amount">Montant :</label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount" type="number" placeholder="Le montant de la dépense" v-model="form.amount">
    </div>


    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="to_user">Pour qui :</label>
        <p class="text-xs font-thin mb-2">Si vous aussi vous avez contribué à cette dépense, mettez "moi" dans le champ "Nom de la personne".</p>
        <div v-for="(input, index) in inputs" :key="index">
            <div class="flex gap-4">
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nom de la personne" v-model="input.value" type="text" />
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Montant dû" v-model="input.amount" type="number" />
            </div>
            <button type="button" class="text-gray-700 text-sm font-bold mb-2 mr-4" @click="duplicateInput(index)">Ajouter</button>
            <button type="button" class="text-gray-700 text-sm font-bold mb-2 mr-4" @click="removeInput(index)" :disabled="inputs.length === 1">Supprimer</button>
        </div>
    </div>
        
        <div class="flex justify-center">
          <button type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
            Envoyer
          </button>
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
  name: 'NewExpense',

    data(){
        return{
            categories: null,
             inputs: [{ value: "", amount: null }],

            form:{
                category: '',
                from_user: '',
                amount: '',
                to_users: ''
                }
        }
    },

    mounted() {
      // Pour avoir les catégories de dépenses créés précedemment
        axios
        .get('http://127.0.0.1:3001/expense-categories')
        .then((response) => {
            this.categories = response.data
        })
    },
  
    methods:{

        duplicateInput(index) {
            this.inputs.splice(index + 1, 0, { value: "" });
        },
        removeInput(index) {
            this.inputs.splice(index, 1);   
        },
        
        submitForm(){
            const to_users = this.inputs.map(input => input.value+'/'+input.amount).join(", ");
            let date = this.getDate();
            
            var data = '{"category": "'+this.form.category+'","from_user": "'+this.form.from_user+'","user_id": "'+store.state.id+'","amount": "'+this.form.amount+'","to_users": "'+to_users+'","date": "'+ date +'"}';
           
            store.dispatch('sendExpense', {
                data: data,
            })      
        },

        getDate() {
          const today = new Date();
          const yyyy = today.getFullYear();
          let mm = today.getMonth() + 1;
          let dd = today.getDate();

          if (dd < 10) dd = '0' + dd;
          if (mm < 10) mm = '0' + mm;

          return dd + '/' + mm + '/' + yyyy;
        }
    }
  
}
</script>

<style scoped>
    .select-dropdown {
      position: relative;
    }

    .select-dropdown::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 12px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #4a5568;
      transform: translateY(-50%);
    }

    .select-dropdown.open::after {
      transform: translateY(-50%) rotate(180deg);
    }
  </style>