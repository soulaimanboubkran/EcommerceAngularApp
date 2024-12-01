import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:'',
    pathMatch:'full',
    loadComponent:async ()=>{
        const m = await import('./home/home.component');
        return m.HomeComponent;
    }
}];
