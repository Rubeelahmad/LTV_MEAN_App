import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';

import { PhoneNumber } from '../../../models/phone-number.model';
import { PhoneService } from '../../../services/phone.service';
import {
  ActionButtonsComponent,
} from '../action-buttons/action-buttons.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-number-list',
  standalone: true,
  imports: [CommonModule, ActionButtonsComponent, FilterComponent],
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css'],
})
export class NumberListComponent implements OnInit {
  filteredPhoneNumbers: PhoneNumber[] = [];
  pagination: any = {}; 
  phoneNumbers: PhoneNumber[] = []; 

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    this.loadPhoneNumbers(1, 2);
  }

  loadPhoneNumbers(page: number, limit: number): void {
    this.phoneService.getPhoneNumbers('', page, limit).subscribe((response) => {
      this.phoneNumbers = response.data;
      this.filteredPhoneNumbers = [...this.phoneNumbers];
      this.pagination = response.pagination;
    });
  }

  onToggleStatus(number: PhoneNumber): void {
    number.status = number.status === 'active' ? 'inactive' : 'active';
  }

  onFilterStatus(status: string): void {
    if (status === 'all') {
      this.filteredPhoneNumbers = [...this.phoneNumbers];
    } else {
      this.filteredPhoneNumbers = this.phoneNumbers.filter((phone) => phone.status === status);
    }
  }

  onNextPage(): void {
    if (this.pagination.hasNextPage) {
      this.loadPhoneNumbers(this.pagination.currentPage + 1, this.pagination.itemsPerPage);
    }
  }

  onPrevPage(): void {
    if (this.pagination.hasPrevPage) {
      this.loadPhoneNumbers(this.pagination.currentPage - 1, this.pagination.itemsPerPage);
    }
  }
}
