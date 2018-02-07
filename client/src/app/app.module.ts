import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';  
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [NavbarComponent, HomeComponent],
  imports: [
    BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
