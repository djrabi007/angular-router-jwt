import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  BarWorkOutChart=[];
  LineChart=[];
  BarChart=[];
  PieChart=[];

  ngOnInit()
  {
    this.showWorkoutBarChart();
    this.showLineChart();
    this.showBarChart();
    this.showPieChart();

  }
  public showWorkoutBarChart(){
    // Line chart:
this.BarWorkOutChart = new Chart('barWorkoutChart', {
  //type: 'line',
  type: 'bar',
  data: {
        //X- Axis (By Rabi)  
        labels: ["Week1", "Week2", "Week3", "Week4", "Week5"],
        datasets: [  //2 Data -- Last one Rabi added
          {
            label: 'Calorie Burn during Walk',
            //Y-axis (By Rabi)
            data: [2,7 , 3, 5, 2],
            fill:false,
            //fill:true,
            lineTension:0.2,
            borderColor:"Red",
            borderWidth: 1
         }
         ,
         {
          label: 'Calorie Burn during Run',
          //Y-axis (By Rabi)
          data: [4,2 , 1, 7, 5],
          fill:false,
         // fill:true,
          lineTension:0.2,
          borderColor:"blue",
          borderWidth: 1
        }
        ,
        {
          label: 'Calorie Burn during Boxing',
          //Y-axis (By Rabi)
          data: [2,5 , 3, 5, 8],
          //fill:false,
          fill:true,
          lineTension:0.2,
          borderColor:"Green",
          borderWidth: 1
        }
      
      
      ]
  }, 
  options: {
                title:{
                    text:"Bar Chart",
                    display:true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
           }
});
  }




  public showLineChart(){
    // Line chart:
this.LineChart = new Chart('lineChart', {
  type: 'line',
  data: {
        //X- Axis (By Rabi)  
        labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
        datasets: [  //2 Data -- Last one Rabi added
          {
            label: 'Number of Items Sold in Months',
            //Y-axis (By Rabi)
            data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
            fill:false,
            //fill:true,
            //lineTension:0.2,
            borderColor:"red",
            //borderWidth: 3
         }
         ,
         {
          label: 'Number of Items Sold By RABI!!!',
          //Y-axis (By Rabi)
          data: [4,2 , 1, 7, 5, 8,15,12,15,2,8,5],
          //fill:false,
          fill:true,
          //lineTension:0.2,
          borderColor:"blue",
          //borderWidth: 2
        }
      
      
      ]
  }, 
  options: {
                title:{
                    text:"Line Chart",
                    display:true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
           }
});
  }

  public showBarChart(){

    // Bar chart:
this.BarChart = new Chart('barChart', {
  type: 'bar',
  data: {
      labels:   ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
                        label: '# of Votes',
                        data: [9,7 , 3, 5, 2, 10],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
         }, 
  options: {
              title:{
                  text:"Bar Chart",
                  display:true
            },
              scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                              }
                          }]
                      }
          }
});


  }

  public showPieChart(){
    // pie chart:
this.PieChart = new Chart('pieChart', {
  type: 'pie',
data: {
 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 datasets: [{
     label: '# of Votes',
     data: [9,7 , 3, 5, 2, 10],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});


  }

  

}
