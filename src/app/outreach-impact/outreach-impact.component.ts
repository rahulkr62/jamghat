import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-outreach-impact',
  templateUrl: './outreach-impact.component.html',
  styleUrls: ['./outreach-impact.component.css']
})
export class OutreachImpactComponent {

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    new Chart('myChart', {
      type: 'line',
      data: {
        labels: [
          '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
          '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'
        ],
        datasets: [
          {
            label: 'Direct Outreach',
            data: [
              115, 150, 200, 230, 250, 250, 225, 250,
              300, 325, 450, 350, 600, 650, 701, 1250, 2650
            ],
            borderWidth: 3,
            tension: 0.4
          },
          {
            label: 'Indirect Outreach',
            data: [
              2500, 2800, 3000, 3100, 3500, 4000, 3500, 3700,
              4000, 4000, 4500, 6000, 8000, 10000, 9000, 12000, 16170
            ],
            borderWidth: 3,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
}
