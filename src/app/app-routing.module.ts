import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

// Admin component
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  }, {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  }, {
    path: 'login',
    component: SigninComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
