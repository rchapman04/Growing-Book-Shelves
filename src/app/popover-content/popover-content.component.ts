import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';


@Component({
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle],
  standalone: true,
  selector: 'app-popover-content',
  templateUrl: './popover-content.component.html',
  styleUrls: ['./popover-content.component.scss'],
})
export class PopoverContentComponent {
  @Input() title!: string;
  @Input() description!: string;

}
