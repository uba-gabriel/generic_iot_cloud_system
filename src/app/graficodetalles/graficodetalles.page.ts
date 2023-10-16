import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DispositivoService } from '../services/dispositivo.service'

@Component({
  selector: 'app-graficodetalles',
  templateUrl: './graficodetalles.page.html',
  styleUrls: ['./graficodetalles.page.scss'],
})
export class GraficodetallesPage implements OnInit {

  public dev_id: number = 0;
  public evId: number = 0;


  constructor(private dispositivoService: DispositivoService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.obtenerTemp();
    this.dev_id=Number(this.route.snapshot.paramMap.get('dev_id'));
  }

  async obtenerTemp() {
    console.log("Estoy en obtenerTemp");
  }

}

