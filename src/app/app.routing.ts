//A gente deve importar o tipo Route e o tipo ModuleWithProviders, que é um complemento que vem com o Angular (se liga nos diretorios de cada um):
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'


//Importar os componentes
import { PersonagensComponent } from './componentes/personagens/personagens.component';
import { PlanetasComponent} from './componentes/planetas/planetas.component';
import { HomeComponent } from './componentes/home/home.component';
import { PersonagemComponent } from './componentes/personagem/personagem.component';
import { PlanetaComponent } from './componentes/planeta/planeta.component'

// Se cria uma constante tipo Route e se criam as rotas assim:
const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personagens', component: PersonagensComponent },
    { path: 'planetas', component: PlanetasComponent },
    { path: 'personagem/:idzinho', component: PersonagemComponent}, //Nesse caso se eu colocar no personagem.component.html qualquer numero ele vai entender, fica dinâmico desse jeito! (/:d)
    { path: 'planeta/:id6619', component: PlanetaComponent}
];


//Para exportar devemos usar uma constante com o tipo "ModuleWithProviders"...ou seja Módulo com proveedores (vai proveer um mecânismo de rotas) SE LIGA!!!...devo dar um tipo no <any> no ModuleWithProviders, na versão de Leo não precisa, mas aqui é necessario senão não roda!!!
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

//forRoot é porque é uma rota primaria