import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './Components/directivesComponent/directives.component';
import { BFlexboxComponent } from './Components/b-flexbox/b-flexbox.component';
import { ChangeColorDirective } from './Components/directivesComponent/directivesList/change-color.directive';
import { DynamicMenuDirective } from './Components/directivesComponent/directivesList/dynamic-menu.directive';
import { PipesComponent } from './Components/pipes/pipes.component';
import { CapitalizarPipe } from './Components/pipes/pipe/capitalizar.pipe';
import { DomSeguroPipe } from './Components/pipes/pipe/dom-seguro.pipe';
import { PasswordPipe } from './Components/pipes/pipe/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    BFlexboxComponent,
    ChangeColorDirective,
    DynamicMenuDirective,
    PipesComponent,
    CapitalizarPipe,
    DomSeguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
