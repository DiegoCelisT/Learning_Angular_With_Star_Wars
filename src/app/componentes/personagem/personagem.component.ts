import { Component, OnInit } from '@angular/core';

//Rota ativada (Com isso a gente consegue acessar a rota atual(a que está ativada) e pegar um ou vários parâmetros) Neste caso vamos pegar a rota personagem e pegar o parâmetro do ID.
import { ActivatedRoute } from '@angular/router';

//trazer também o serviço:
import { PersonagensService} from '../../services/personagens.service';



@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  constructor(private route_do_personagem: ActivatedRoute, private personagensServicinho: PersonagensService) { }

  id: number;
  personagem: any;

  ngOnInit(): void {

    this.route_do_personagem.params.subscribe (parametros_que_vou_usar => {
      this.id = parametros_que_vou_usar ['idzinho'];

      this.personagensServicinho.getPersonagem (this.id)
      .subscribe(personagem => {
        this.personagem = personagem
      });
    })
  }
}
