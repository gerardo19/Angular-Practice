import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './Components/directivesComponent/directives.component';
import { BFlexboxComponent } from './Components/b-flexbox/b-flexbox.component';
import { ChangeColorDirective } from './Components/directivesComponent/directivesList/change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    BFlexboxComponent,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
