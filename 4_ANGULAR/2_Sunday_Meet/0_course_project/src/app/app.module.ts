import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './pages/admin/admin.component';
import { DogsComponent } from './components/dogs/dogs/dogs.component';
import { UppercasePipe } from './utils/pipes/uppercase.pipe';
import { FilterPageComponent } from './pages/filter-page/filter-page.component';
import { FilterPipe } from './utils/pipes/filter.pipe';
import { UserInfoComponent } from './pages/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    UserprofileComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    AdminComponent,
    DogsComponent,
    UppercasePipe,
    FilterPageComponent,
    FilterPipe,
    UserInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
