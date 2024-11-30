import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './componenets/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,HeaderComponent],
  template: `
    <app-header/>
    <app-home/>
    
    <router-outlet/>
  `,
  styles: []
})
export class AppComponent {
  title = 'Ecommerce';
}
