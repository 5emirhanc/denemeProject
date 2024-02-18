import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ErrorComponent } from './components/error/error.component';
import { ContanctComponent } from './components/contanct/contanct.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {
  canActivateChild,
  canActivateGuard,
  canDeActivate,
  isAdminGuard,
  isUserGuard,
} from './guards/example.guard';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
        children: [
          {
            path: ':id',
            component: ProductDetailComponent,
          },
        ],
        canActivateChild: [canActivateChild],
        canActivate: [canActivateGuard],
        canDeactivate: [canDeActivate],
      },
      {
        path: 'contanct',
        component: ContanctComponent,
      },
      {
        path: 'aboutus',
        component: AboutusComponent,
      },
    ],
  },

  /*{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: ':id',
        component: ProductDetailComponent,
      },
    ],
    canActivateChild: [canActivateChild],
    canActivate: [canActivateGuard],
    canDeactivate: [canDeActivate],
    resolve: { photos: resolveGuard },
  },
  {
    path: 'contanct',
    component: ContanctComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },,*/
  {
    path: 'dashboard',
    component: AdminPageComponent,
    canMatch:[isAdminGuard]
  },
  {
    path: 'dashboard',
    component: UserComponent,
    canMatch:[isUserGuard]
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
