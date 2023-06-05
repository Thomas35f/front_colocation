<template>
  <nav class="bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <a href="#" class="text-white text-xl font-semibold">Coloc' Action !</a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="/" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
              <a v-if="logged" href="/creer-depense" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Créer une dépense</a>
              <a v-if="!logged" href="/register" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inscription</a>
              <a v-if="logged" href="/categorie" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Créer une catégorie</a>
              <button v-if="logged" @click="logout()" class="font-bold hover:text-white px-3 py-2 rounded-xl text-sm font-medium bg-red-400" >Déconnexion</button>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <!-- Remaining code for notifications and user menu -->
        </div>
        <div class="-mr-2 flex md:hidden">
          <button @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only text-white">Open main menu</span>
            V
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="/" class="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
        <a v-if="logged" href="/creer-depense" class="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Créer une dépense</a>
        <a v-if="!logged" href="/register" class="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inscription</a>
        <a v-if="logged" href="/categorie" class="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Créer une catégorie</a>
        <button v-if="logged" @click="logout()" class="block font-bold hover:text-white px-3 py-2 rounded-xl text-sm font-medium bg-red-400" >Déconnexion</button>
      </div>
    </div>
  </nav>
</template>

<script>
import store from '../store'

export default {
  name: 'Navbar',

  data() {
    return {
      isMobileMenuOpen: false,
      logged: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },

    logout() {
       store.dispatch('logout') 
    }
  },
  mounted() {

    if(store.state.email)
    {
      this.logged = !this.logged;
      console.log('connecté')
    }else{
      console.log('non connecté')
    }
  },
};
</script>
