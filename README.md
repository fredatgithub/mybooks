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

### ajout d'une règle prettier pour afficher les single quote dans **_.prettierrc.js_**

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

### définir les attributs de la class **_book.ts_**

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
a[routerLink="auth/signup"]
a[routerLink="auth/signin"]
```

### préparation du point d'entrée **_app.component.html_**

```
<app-header></app-header>
div.container
<router-outlet></router-outlet>
```

> **Note :** appuyer sur la touche tabulation devant chaque ligne de code HTML pour le compléter automatiquement

### tester l'application

```
ng serve -o
```

### installer firebase

```
npm install firebase
```

### ouvrir la console firebase https://console.firebase.google.com

> **Note :** Créer un projet "books" et désactiver Google Analytics
> ouvrir le projet "books"
> cliquer sur "Ajouter Firebase à votre application Web"
> ajouter le nom de votre configuration "books"
> copier le code javascript (var firebaseConfig=....)

### coller le code copier à l'instant dans le constructor de **_app.component.ts_**

> **Note :** faites bien attention à coller le code dans **constructor**

### aller dans la console web de firebase pour configurer un mode de connexion

> **Note :** aller dans **_Authentication_**
> cliquer sur **_configurer un mode de connexion_**
> choisir **_adresse email/mot de passe_**
> activer et enregister

### créer 3 méthodes dans **_auth.service.ts_**

> créer un utilisateur
> connecter un utilisateur
> déconnecter un utilisateur

### ajouter le formulaire de création d'un compte user dans **_signup.component.ts_**

> injection de dépendance de 3 classes
> préparation du formulaire avec formBuilder
> validators pattern pour l'email pour respecter la contrainte firebase de 6 caractères minimum de type alpha numérique
> formulaire HTML dans signup.component.html

### ajouter le formulaire de connexion d'un user dans **_signin.component.ts_**

> code pratiquement identique au précédent
> remplacer signup par signin et createUser par signinUser

### préparer le header pour afficher les boutons en fonction de l'authentification de l'utilisateur

> header.component.ts
> header.component.html

### création de la guard pour protéger les routes

> créer le code dans auth-guard.component.ts
> renvoyer une Promise

### intégrer les guard dans les routes

> toutes les routes avec books
