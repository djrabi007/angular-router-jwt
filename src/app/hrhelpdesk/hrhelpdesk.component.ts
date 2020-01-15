import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-hrhelpdesk',
  templateUrl: './hrhelpdesk.component.html',
  styleUrls: ['./hrhelpdesk.component.css']
})
export class HrhelpdeskComponent implements OnInit {
  chart = [];
  
  constructor(private _weather: WeatherServiceService) { }

  ngOnInit()  {

    this._weather.dailyForecast()
      .subscribe(res =>{console.log(res)});
 
    this._weather.dailyForecast()
      .subscribe(res => {
        
        let temp_max = res['list'].map(res => res.main.temp_max)
        let temp_min = res['list'].map(res => res.main.temp_min)
        
    
        //X- Axis or Labl preparation (By Rabi) ---Start
        let alldates = res['list'].map(res => res.dt)
        let weatherDates = []
        alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
                         })
        //X- Axis or Labl preparation (By Rabi) ---End
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates, //X- Axis (By Rabi)  
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })

      }) 
  }

}
