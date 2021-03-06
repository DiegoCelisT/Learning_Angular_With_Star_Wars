import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnakecasePipe } from './../snakecase.pipe';
import { PersonagensComponent } from './personagens/personagens.component';
import { PlanetasComponent} from './planetas/planetas.component';
import { HomeComponent } from './home/home.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { PlanetaComponent } from './planeta/planeta.component';



@NgModule({
  declarations: [
    PersonagensComponent,
    PlanetasComponent,
    HomeComponent,
    PersonagemComponent,
    PlanetaComponent,
    SnakecasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonagensComponent,
    PlanetasComponent,
    HomeComponent,
    PersonagemComponent,
    PlanetaComponent
  ]
})
export class ComponentesModule { }
