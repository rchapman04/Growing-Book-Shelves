import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, FormsModule, IonButton, IonIcon],
})
export class AddBookModalComponent {

  constructor(private modalController: ModalController) { }

  bookForm = {
    title: '',
    author: '',
    notes: '',
    genre: ''
  }

  async submit(){
    await this.modalController.dismiss(this.bookForm)
  }

  async cancel(){
    await this.modalController.dismiss()
  }

}
