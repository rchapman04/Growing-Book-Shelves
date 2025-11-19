import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})

function bookDescription(){
  const newIonCard = document.createElement("ion-card")

  
}

export class HomePage {
  constructor() {}

  ngAfterViewInit(){
    const books = document.querySelectorAll(".book")

    books.forEach(book => {
      book.addEventListener("click", () => {
        console.log("You have clicked a book!")
      })
    })
  }

}
