import { Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductListComponent } from './compenents/product-list/product-list.component';

export const routes: Routes = [{
    path:'',
    pathMatch:'full',
    loadComponent:async ()=>{
        const m = await import('./home/home.component');
        return m.HomeComponent;
    }
},
{
    path:'categories',
children:[{path:":id",component:ProductListComponent}],
   
    component:CategoryComponent
}];
