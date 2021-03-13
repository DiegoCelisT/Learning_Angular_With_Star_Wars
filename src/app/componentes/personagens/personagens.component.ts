import { Component, OnInit } from '@angular/core';
import { PersonagensService} from '../../services/personagens.service'

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {


  //Objeto trazido daquele arquivo personagens.json:
  personagens: any = [];

  constructor(personagesServ: PersonagensService) { 
    this.personagens = personagesServ.getTodos ();
  }

  ngOnInit(): void {
  }

}
