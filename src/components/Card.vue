<template>
    <a>
        <div class="border-solid border-2 border-2 border-gray-500 p-3 flex flex-col gap-3 rounded-xl bg-white">
            <h2 class="text-center font-bold text-xl">{{ expense.category }}</h2>
            <p class="text-center">Le {{expense.date}}</p>
            <p class="text-center">Montant dépensé : <span class="font-bold"> {{ expense.amount }} €</span></p>
            <p class="text-center">Débiteur : <span class="font-bold"> {{ expense.from_user }}</span></p>
            <div class="w-2/3 border-solid border-1 border-black my-6 mx-auto"></div>
            <p class="text-center">Ceux qui doivent de l'argent à {{expense.from_user}} <span v-if="me">(dont moi)</span> :</p>
            <div class="mx-auto h-min-32" v-html="filterExpenses(expense.to_users)"></div>
            <div class="w-2/3 border-solid border-1 border-black my-6 mx-auto"></div>
            <p class="text-center" v-if="expense.amount != payedAmount">Montant restant à définir : {{expense.amount - payedAmount}} €</p>
            <button class="bg-red-100 rounded-xl p-2 font-bold" @click="deleteExpense(expense.id)">Effacer cette dépense</button>
        </div>
    </a>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Card',

  props: ['expense'],

  data() {
    return {
      logged: false,
      me: false,
      payedAmount: null,
    };
  },

  methods: {
    filterExpenses(str)
       {
        let users = str.split(',');
        let div = '<div>';
        let amountByUsers = 0;

        users.forEach(user => {
          let userAndAmount = user.split('/');
          let send = '';

          // Condition pour savoir si l'utilisateur a également contribué
          if(userAndAmount[0] == "moi")
          {
            this.me = true;
            send = '<div class="flex flex-row gap-1 "><p>' + userAndAmount[0] + ' : </p>' + '<p>' + userAndAmount[1] + ' € (le meilleur)</p></div>';
            amountByUsers += parseInt(userAndAmount[1]);

          }else{
            send = '<div class="flex flex-row gap-1 "><p>' + userAndAmount[0] + ' : </p>' + '<p>' + userAndAmount[1] + ' €</p></div>';

            // On ajoute le montant de la parsonne
            amountByUsers += parseInt(userAndAmount[1]);
          }

          div += send;
        });
        
        // Total payé. On fera ensuite la soustraction avec le montant payé pour savoir combien il reste
        this.payedAmount = amountByUsers;
        
        div += '</div>'
        return div
       },

       deleteExpense(id)
       {
          axios.post('http://127.0.0.1:3001/expenses-delete/'+ id)
          .then((res) => {
            location.reload()
          })
       }
  },
};
</script>
