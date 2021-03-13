import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  personagens: any = [{
    "name": "luke skywalker",
    "height": "172",
    "gender": "male",
    "created": "2014-12-09T13:50:51.644000Z",
    "price": "29.99",
    "rating": "8.865342"
  },
  {
    "name": "darth vader",
    "height": "202",
    "gender": "male",
    "created": "2014-12-20T13:50:51.644000Z",
    "price": "34.29",
    "rating": "9.12823342"
  }]

  constructor() { }

  getTodos (){
    return this.personagens;
  }

}
