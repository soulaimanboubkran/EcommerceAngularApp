import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './componenets/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header/>
    <main>
       <router-outlet/>
    </main>
   
  `,
  styles: []
})
export class AppComponent {
  title = 'Ecommerce';
}
