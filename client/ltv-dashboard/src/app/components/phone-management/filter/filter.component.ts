import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Output() statusChanged = new EventEmitter<string>();

  onFilterChange(event: Event): void {
    const selectedStatus = (event.target as HTMLSelectElement).value;
    this.statusChanged.emit(selectedStatus);  
  }
}