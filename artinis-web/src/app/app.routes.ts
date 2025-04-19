import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'book-a-demo',
    loadComponent: () =>
      import('./pages/book-a-demo/book-a-demo.component').then((m) => m.BookADemoComponent),
  },
  {
    path: 'products/iot',
    loadComponent: () =>
      import('./pages/products/iot-product/iot-product.component').then((m) => m.IotProductComponent),
  },
  {
    path: '**',
    redirectTo: '', // fallback to home
  },
];
