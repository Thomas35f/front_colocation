# Technos

- Le projet est sous Vue 3.
- Vue X (pour le store)
- Windi CSS (pour le design du front)
- Axios (pour les requêtes à l'api)
- Vue-router (pour la redirection des pages)
- Vite JS (pour le serveur de développement)

## Install
```sh
- pnpm install
- pnpm dev
```

### Infos générales

- Un système d'authentification a été mis en place. Les dépenses créées seront liées à l'utilisateur connecté et qui les a créé.
- Un store est utilisé pour amener le système d'authentification. L'id et le mail de l'utilisateur seront stockés en session. Cela permet de bien séparer la structure du code.
- La navbar s'adapte en fonction de si on est connecté ou non.
- La homepage a 3 vues différentes en fonction de différents critères : Non connecté / Connecté mais aucune dépense créé / Connecté et dépenses faites
- Chaque dépense est lié à l'utilisateur qui l'a créé.