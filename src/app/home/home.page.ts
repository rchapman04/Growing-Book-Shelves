import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { BookModalComponent } from '../components/book-modal/book-modal.component';
import { ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons],
})

export class HomePage {
  constructor(private modalCtrl: ModalController) {
    addIcons({addCircleOutline})
  }

  ngAfterViewInit(){
    const books = document.querySelectorAll(".book")

    books.forEach(book => {
      book.addEventListener("click", () => {
        const title = book.textContent || "null"
        this.openPopover(title)
      })
    })
  }

  async openPopover(title: string){
    const modal = await this.modalCtrl.create({
      component: BookModalComponent,
      componentProps: {
        title,
        description: `This book is ${title}`
      },      
    })
    await modal.present()
  }

  addBook(){

  }

}
