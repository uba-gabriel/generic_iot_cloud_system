import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
})
export class LogsPage implements OnInit {

  logs: any[] = []; 
  public dev_id: any;

  constructor(private router: ActivatedRoute, private _dispositivoService: DispositivoService) {}

  ngOnInit() {
    this.dev_id = this.router.snapshot.paramMap.get('dev_id');
    console.log('idDispositivo:'+this.dev_id);
    this.obtenerLogs();
  }

  async obtenerLogs() {
    console.log("Estoy en obtenerLogs");

  }

}

