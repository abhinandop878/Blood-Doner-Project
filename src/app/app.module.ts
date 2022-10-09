import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDonerComponent } from './add-doner/add-doner.component';
import { SearchDonerComponent } from './search-doner/search-doner.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDonerComponent,
    SearchDonerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
