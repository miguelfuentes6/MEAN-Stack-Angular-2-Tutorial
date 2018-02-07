import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HomeComponent } from './components/home/home.component'; 
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', 
  component: HomeComponent
  },
  {path: '**',component:HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
