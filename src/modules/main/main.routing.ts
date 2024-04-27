import { Routes } from '@angular/router';
import { HomeComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../main/modules/dashboard').then((x) => x.DashboardModule),
      },
    ],
  },
];
