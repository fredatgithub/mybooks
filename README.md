# Application pour répertorier les livres d'une bibliothèque

### Structure de l'application

- component authentification
- component view list book
- component view detail
- component form book (add & update)
- component navbar
- service authentification
- service book
- routing
- guard
- model book (title, author, picture?)

> **Note :** application complète connectée à Firefox pour la gestion des données

### création du projet

```
$ ng new mybooks --style=scss --routing --skip-tests=true
```

### création du component header

```
ng g c header
```

### création des components auth

```
ng g c auth/signup
ng g c auth/signin
```

### création des components book

```
ng g c book/book-list
ng g c book/single-book
ng g c book/book-form
```

### création des services

```
ng g s services/auth
ng g s services/auth-guard
ng g s services/book
```

### installation de Bootstrap

```
npm install bootstrap@3.3.7
```

### ajouter le style Bootstrap dans **_angular.json_**

```
"styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css", "src/styles.scss"],
```

### ajout des modules forms et http dans **_app.module.ts_**

```
imports: [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
]
```

### ajout d'une rège prettier pour afficher les single quote dans **_.prettierrc.js_**

```
module.exports = {
  singleQuote: true
};
```

### ajout des routes dans le fichier **_app-routing.module.ts_**

```
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/add', component: BookFormComponent },
  { path: 'books/view/:id', component: SingleBookComponent }
```

### création du modèle book dans **_book.modele.ts_**

```
ng g class models/book
```

### définir les attributs de la class book.ts

```
photo: string; (optionnel)
title: string; (obligatoire)
author: string; (obligatoire)
```

### ajout de la barre de navigation dans **_header.component.html_**

```
nav.navbar.navbar-default
div.container-fluid
ul.nav.navbar-nav
li[routerLinkActive="active"]
a.routerLink="books"
ul.nav.navbar-nav.navbar-right
li[routerLinkActive="active"]*2
```

> **Note :** appuyer sur la touche tabulation devant chaque ligne pour compléter automatiquement le code HTML
