//all classes meet here


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// his importing for firstNAme, lastName, adress , city, street,state
import { FormsModule } from '@angular/Forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import class name from file 
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // Service provide app
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
