import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Reactive Form
import { ReactiveFormsModule } from '@angular/forms';

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from './shared/services/auth.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { HistoryComponent } from './components/history/history.component';
import { MeasureComponent } from './components/measure/measure.component';
import { ContactComponent } from './components/contact/contact.component';
import { LevelsComponent } from './components/levels/levels.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    NavigationComponent,
    HeaderComponent,
    UserProfileComponent,
    ExercisesComponent,
    HistoryComponent,
    MeasureComponent,
    ContactComponent,
    LevelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }