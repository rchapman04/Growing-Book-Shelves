import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss'],
})
export class BookModalComponent {
  @Input() title!: string;
  @Input() description!: string;
}
