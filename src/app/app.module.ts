import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './Components/directives/directives.component';
import { BFlexboxComponent } from './Components/b-flexbox/b-flexbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    BFlexboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
