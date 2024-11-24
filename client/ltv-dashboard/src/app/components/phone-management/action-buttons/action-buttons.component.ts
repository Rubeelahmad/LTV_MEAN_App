import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { PhoneNumber } from '../../../models/phone-number.model';

@Component({
  selector: 'app-action-buttons',
  imports: [],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.css'
})
export class ActionButtonsComponent {
  @Input() phone!: PhoneNumber;
  @Output() toggleStatus = new EventEmitter<void>();

  onToggleStatus(): void {
    this.toggleStatus.emit();
  }
}