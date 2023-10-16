import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../../services/dispositivo.service';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public temperatura: number = 0;
  public myChart: any = 0;
  private chartOptions: any = 0;
  public dev_id: number = 0;

  constructor(private dispositivoService: DispositivoService, private route: ActivatedRoute) {

  }

  async ngOnInit() {
    this.dev_id = Number(this.route.snapshot.paramMap.get('dev_id'));
    console.log(this.dev_id);
    try {
      const mediciones = await this.dispositivoService.getMediciones(this.dev_id);

      // Crear arreglos para almacenar las fechas y las temperaturas
      const fechas: number[] = [];
      const temperaturas: number[] = [];

      // Iterar sobre las mediciones para obtener las fechas y temperaturas
      for (const medicion of mediciones) {
        const fecha = new Date(medicion.timestamp.value).getTime(); // Obtener la fecha en formato de timestamp
        const temperatura = Number(medicion.temperatura);
        fechas.push(fecha);
        temperaturas.push(temperatura);
      }

      // Crear la serie de datos para el gráfico con el campo 'type' agregado
      const series: [number, number][] = fechas.map((fecha, index) => [fecha, temperaturas[index]]);

      // Ordenar los datos por fecha en orden ascendente
      const sortedData = series.sort((a, b) => a[0] - b[0]);

      // Llamar a la función para generar el gráfico con los datos ordenados
      this.generarChart(fechas, sortedData);
    } catch (error) {
      console.log(error);
    }
  }

  generarChart(fechas: number[], series: [number, number][]) {
    this.chartOptions = {
      chart: {
        type: 'line', // Se puede cambiar el tipo de gráfico a 'column'
        margin: 75,
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25,
        },
      },
      title: {
        text: 'Device ID: ' + this.dev_id,
      },
      credits: { enabled: false },
      plotOptions: {
        column: {
          depth: 25,
        },
      },
      xAxis: {
        type: 'datetime', // Cambia a tipo 'datetime' para fechas
      },
      yAxis: {
        title: {
          text: 'Temp (ºC)',
        },
        min: 0,
        max: 100,
        plotBands: [
          {
            from: 0,
            to: 10,
            color: '#00008B', // azul oscuro
          },
          {
            from: 10,
            to: 30,
            color: '#0000FF', // azul
          },
          {
            from: 30,
            to: 100,
            color: '#00BFFF', // celeste
          },
        ],
      },
      series: [{
        name: 'Date',
        data: series,
        dataLabels: {
          enabled: true,
        },
      }],
    };

    this.myChart = Highcharts.chart('highcharts', this.chartOptions);
  }
}