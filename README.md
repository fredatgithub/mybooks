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
