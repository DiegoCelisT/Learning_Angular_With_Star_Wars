import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetasService} from '../../services/planetas.service';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {

  constructor(private route_do_planeta: ActivatedRoute, private planetasServ: PlanetasService) { }

  id: number;
  planeta: any = [];

  ngOnInit(): void {

    this.route_do_planeta.params.subscribe(parametros => {
      this.id = parametros ['id6619'];

      this.planetasServ.getPlaneta (this.id)
      .subscribe(planeta => {
        this.planeta = planeta
      });
    })
  }
}
