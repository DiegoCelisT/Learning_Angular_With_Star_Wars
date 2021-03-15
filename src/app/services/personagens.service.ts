import { Injectable } from '@angular/core';
//import da requisição
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  //SEM REQUISIÇÃO HTTP
  // personagens: any = [{
  //   "name": "luke skywalker",
  //   "height": "172",
  //   "gender": "male",
  //   "created": "2014-12-09T13:50:51.644000Z",
  //   "price": "29.99",
  //   "rating": "8.865342"
  // },
  // {
  //   "name": "darth vader",
  //   "height": "202",
  //   "gender": "male",
  //   "created": "2014-12-20T13:50:51.644000Z",
  //   "price": "34.29",
  //   "rating": "9.12823342"
  // }]

  //COM REQUISIÇÃO HTTP:
  personagens: any =[];

  //Injeção de dependencia para a requisição:
  constructor(private httpzinho: HttpClient) { }

  getTodos (){
    // return this.personagens; versão sem requisição
    // versão com requisição (promesa)
    return this.httpzinho.get ('https:/swapi.dev/api/people/');
  }

}
