import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentesModule} from './componentes/componentes.module';
import { routing } from './app.routing'

//Adição da requisição HTTP:
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentesModule,
    routing,
    HttpClientModule  //new new new new new new
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
