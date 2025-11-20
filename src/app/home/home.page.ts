import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { PopoverController } from '@ionic/angular/standalone';
import { PopoverContentComponent } from '../popover-content/popover-content.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})

export class HomePage {
  constructor(private popoverCtrl: PopoverController) {}

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
    const popover = await this.popoverCtrl.create({
      component: PopoverContentComponent,
      componentProps: {
        title,
        description: "This is a book",
      },
      alignment: "center",
      showBackdrop: true,
      backdropDismiss: true,
    })

    await popover.present()
  }

}
