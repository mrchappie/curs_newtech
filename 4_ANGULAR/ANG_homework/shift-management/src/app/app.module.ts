import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddWorkerComponent } from './pages/admin/add-worker/add-worker.component';
import { AllWorkersComponent } from './pages/admin/all-workers/all-workers.component';
import { AllShiftsComponent } from './pages/admin/all-shifts/all-shifts.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HandleShiftsComponent } from './pages/handle-shifts/handle-shifts.component';
import { MyShiftsComponent } from './pages/my-shifts/my-shifts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/404/404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    DashboardComponent,
    MyShiftsComponent,
    HandleShiftsComponent,
    SettingsComponent,
    AllShiftsComponent,
    AllWorkersComponent,
    AddWorkerComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'learn-ang-3a987',
        appId: '1:192008310003:web:dfc33509f0f2bb7083fb86',
        storageBucket: 'learn-ang-3a987.appspot.com',
        apiKey: 'AIzaSyAyon2mKLKrbnOnI9EpoDh4JVIWi2VxWZw',
        authDomain: 'learn-ang-3a987.firebaseapp.com',
        messagingSenderId: '192008310003',
        measurementId: 'G-HPDFTGCPZG',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
