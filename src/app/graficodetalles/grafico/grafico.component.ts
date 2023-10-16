//correr antes npm install --save highcharts
import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../../services/dispositivo.service';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss'],
})
export class GraficoComponent  implements OnInit {

  public temperatura: number=0;
  public fechahora: any;
  public myChart: any = 0;
	private chartOptions: any = 0;
  public dev_id: number = 0;
  
  constructor(private dispositivoService: DispositivoService, private route: ActivatedRoute) { 
    // setTimeout(()=>{
    //   console.log("Cambio el valor del sensor");
    //   this.valorObtenido=this.dispositivoService.getUltimaMedicion(this.dispositivoId);
    //   console.log(this.valorObtenido)
    //   //llamo al update del chart para refrescar y mostrar el nuevo valor
    //   this.myChart.update({series: [{
    //       name: 'Cb',
    //       data: [this.valorObtenido],
    //       tooltip: {
    //           valueSuffix: ' Cb'
    //       }
    //   }]});
    // },1000);
  }

  async ngOnInit() {
    this.dev_id = Number(this.route.snapshot.paramMap.get('dev_id'));
    console.log(this.dev_id);
    try {
      const consulta = await this.dispositivoService.getLastdata(this.dev_id);
      const fechaHoraString = consulta[0].timestamp.value;
      this.fechahora = new Date(fechaHoraString);
      this.temperatura = Number(consulta[0].temperatura);
      console.log(this.temperatura);
      this.ionViewDidEnter();
    } catch (error) {
      console.log(error);
    }
  }
  


  ionViewDidEnter() {
    this.generarChart();
  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Device ID: '+this.dev_id + ' - Date: '+this.fechahora.toLocaleString()
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Temp'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#00008B' // azul oscuro
        }, {
            from: 10,
            to: 30,
            color: '#0000FF' // azul
        }, {
            from: 30,
            to: 100,
            color: '#00BFFF' // celeste
        }]
    }
    ,
  
    series: [{
        name: 'Temp:',
        data: [this.temperatura],
        tooltip: {
            valueSuffix: ' ºC'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }

}

