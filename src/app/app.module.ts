import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDonerComponent } from './add-doner/add-doner.component';
import { SearchDonerComponent } from './search-doner/search-doner.component';
import { DeleteDonerComponent } from './delete-doner/delete-doner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes:Routes=[
{
  path:"",component:AddDonerComponent
},
{
  path:"searchDoner",component:SearchDonerComponent
},
{
  path:"deleteDoner",component:DeleteDonerComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    AddDonerComponent,
    SearchDonerComponent,
    DeleteDonerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
