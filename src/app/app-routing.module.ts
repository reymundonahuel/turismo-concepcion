import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'touristicplaces',
    loadChildren: () => import('./touristicplaces/touristicplaces.module').then( m => m.TouristicplacesPageModule)
  },
  {
    path: 'touristicactivities',
    loadChildren: () => import('./touristicactivities/touristicactivities.module').then( m => m.TouristicactivitiesPageModule)
  },
  {
    path: 'bookmark',
    loadChildren: () => import('./bookmark/bookmark.module').then( m => m.BookmarkPageModule)
  },
  {
    path: 'commerces',
    loadChildren: () => import('./commerces/commerces.module').then( m => m.CommercesPageModule)
  },
  {
    path: 'commercedetail',
    loadChildren: () => import('./commercedetail/commercedetail.module').then( m => m.CommercedetailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
