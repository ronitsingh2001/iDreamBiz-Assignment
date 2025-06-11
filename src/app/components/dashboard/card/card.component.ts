import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [CommonModule],
})
export class CardComponent {
  @Input() label: string = '';
  @Input() value: string | number = 0;
}