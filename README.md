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
- Un store est utilisé pour amener le système d'authentification. L'id et le mail de l'utilisateur seront stockés en session.
- La navbar s'adapte en fonction de si on est connecté ou non.
- La homepage a 3 vues différentes en fonction de différents critères : Non connecté / Connecté mais aucune dépense créé / Connecté et dépenses faites

## Marche à suivre
Le front a été fait pour avoir une compréhension simple et intuitive de l'application. On a donc des textes explicatifs côté front qui dirigent l'utilisateur.

Etapes : 
- Se créer un compte. A la suite de cela, la connexion se fera automatiquement la 1ère fois.
- Créer une catégorie de dépense.
- Créer une dépense. Si l'utilisateur fait parti des personnes ayant participé à la dépense, il devra mettre "moi" dans le champ "Nom de la personne".
- Les dépenses créées sont ensuite affichées sur la homepage. On peut les effacer si on le souhaite. Si il reste de l'argent "non attribué", il sera affiché.