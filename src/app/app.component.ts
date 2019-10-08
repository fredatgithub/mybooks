import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDBkJuQS6c-CSeZEsVwd8XLgGChrbwQDxA',
      authDomain: 'books-26b0a.firebaseapp.com',
      databaseURL: 'https://books-26b0a.firebaseio.com',
      projectId: 'books-26b0a',
      storageBucket: '',
      messagingSenderId: '901744257227',
      appId: '1:901744257227:web:3dbc9b21efffc4aae5d34e'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
