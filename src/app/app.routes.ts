import { Routes } from '@angular/router';
import { ImageSearchEngin } from './image-search-engin/image-search-engin';

export const routes: Routes = [
     { path: '', redirectTo: 'image', pathMatch: 'full' },
    {path:'image',component:ImageSearchEngin}
];
