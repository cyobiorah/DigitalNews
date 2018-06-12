import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

// AuthGuard
import {
  AuthGuardService as AuthGuard
} from '../../auth/auth-guard.service';

//No AuthGuard
import {
  NoAuthGuardService as NoAuthGuard
} from '../../auth/no-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
