import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories = [
    { id: 1, imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg', title: 'Desk and Office', description: 'Work from home accessories' },
    { id: 2, imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg', title: 'Self-Improvement', description: 'Journals and note-taking' },
    { id: 3, imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg', title: 'Travel', description: 'Daily commute essentials' }
  ];
}
