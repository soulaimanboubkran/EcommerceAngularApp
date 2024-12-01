import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/icons';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent],
  template: `
    <app-header/>
    <main>
       <router-outlet/>
    </main>
  <app-footer/>
   
  `,
  styles: []
})
export class AppComponent  implements OnInit{
  title = 'Ecommerce';
  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);
  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faConfig.defaultPrefix = 'far';
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
