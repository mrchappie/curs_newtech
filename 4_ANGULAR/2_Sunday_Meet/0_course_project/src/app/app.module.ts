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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { CustomDirectivesDirective } from './utils/customDirectives/custom-directives.directive';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';
import { Child2Component } from './components/parent/child2/child2.component';

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
    CustomDirectivesDirective,
    ParentComponent,
    ChildComponent,
    Child2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'learn-ang-3a987',
        appId: '1:192008310003:web:e741738f1801f49383fb86',
        storageBucket: 'learn-ang-3a987.appspot.com',
        apiKey: 'AIzaSyAyon2mKLKrbnOnI9EpoDh4JVIWi2VxWZw',
        authDomain: 'learn-ang-3a987.firebaseapp.com',
        messagingSenderId: '192008310003',
        measurementId: 'G-1BX22JRK12',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
