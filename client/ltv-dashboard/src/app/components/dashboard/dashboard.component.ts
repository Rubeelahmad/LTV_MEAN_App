import { Component } from '@angular/core';

import {
  NumberListComponent,
} from '../phone-management/number-list/number-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NumberListComponent],  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
