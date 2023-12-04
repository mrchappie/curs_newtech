import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FilterPageComponent } from './pages/filter-page/filter-page.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'filter', component: FilterPageComponent },
  { path: 'user-info/:username', component: UserInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
