import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { BookModalComponent } from '../components/book-modal/book-modal.component';
import { ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';
import { AddBookModalComponent } from '../components/add-book-modal/add-book-modal.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons],
})

export class HomePage {

  //Initialize the Icon for Adding Books
  constructor(private modalCtrl: ModalController) {
    addIcons({addCircleOutline})
  }

  //Array of Books
  books: any[] = []

  //Book Details popover modal
  async openPopover(book: any){
    const modal = await this.modalCtrl.create({
      component: BookModalComponent,
      componentProps: {
        book,
      },      
    })
    await modal.present()
  }

  //Add book modal
  async openAddBook(){
    const modal = await this.modalCtrl.create({
      component: AddBookModalComponent,
    })
    await modal.present()

    const { data } = await modal.onDidDismiss()
    //If data exists, push it onto the books array
    if (data){
      this.books.push(data)
      console.log(this.books)
    }
  }

}