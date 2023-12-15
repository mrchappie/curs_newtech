import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MyShiftsComponent } from './pages/my-shifts/my-shifts.component';
import { HandleShiftsComponent } from './pages/handle-shifts/handle-shifts.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AllShiftsComponent } from './pages/admin/all-shifts/all-shifts.component';
import { AllWorkersComponent } from './pages/admin/all-workers/all-workers.component';
import { NotFoundComponent } from './pages/404/404.component';
import { isLoggedInGuard } from './utils/guards/isLoggedIn/is-logged-in.guard';
import { isAdminGuard } from './utils/guards/isAdmin/is-admin.guard';
import { isNotLoggedInGuard } from './utils/guards/isNotLoggedIn/is-not-logged-in.guard';

const routes: Routes = [
  // main routes
  {
    path: '',
    component: DashboardComponent,
    canActivate: [isLoggedInGuard],
  },

  // login / register routes
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [isNotLoggedInGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [isNotLoggedInGuard],
  },

  // user routes
  {
    path: 'my-shifts',
    component: MyShiftsComponent,
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'add-shift',
    component: HandleShiftsComponent,
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'edit-shift/:shiftId',
    component: HandleShiftsComponent,
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [isLoggedInGuard],
  },

  // admin routes
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    canActivate: [isLoggedInGuard, isAdminGuard],
  },
  {
    path: 'admin/all-shifts',
    component: AllShiftsComponent,
    canActivate: [isLoggedInGuard, isAdminGuard],
  },
  {
    path: 'admin/all-users',
    component: AllWorkersComponent,
    canActivate: [isLoggedInGuard, isAdminGuard],
  },
  {
    path: 'admin/edit-shift/:shiftId',
    component: HandleShiftsComponent,
    canActivate: [isLoggedInGuard, isAdminGuard],
  },
  {
    path: 'admin/settings',
    component: SettingsComponent,
    canActivate: [isLoggedInGuard, isAdminGuard],
  },

  // 404 route
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
