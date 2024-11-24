import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  FooterComponent,
} from './components/layout/footer/footer.component';  // Adjust path
import {
  HeaderComponent,
} from './components/layout/header/header.component';  // Adjust path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],  // Add imports here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ltv-dashboard';
}
