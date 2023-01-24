import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    RegistroComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    LoginComponent
  ]
})
export class ViewsModule { }
