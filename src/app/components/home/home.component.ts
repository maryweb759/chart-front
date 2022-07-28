import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ITask, ITypePercentage } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public typeData: Array<any> = []; 
  public result:any;
 dataChart:any[] = [];
 dataChartLabel: any= [];
  chart: any = [];
  constructor(private taskS :TaskService, private cdRef:ChangeDetectorRef) { }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  ngOnInit(): void {
     this.getPercentage();
  };
 
  refreshEmitter() {
    this.chart.destroy();
      this.getPercentage();
  }
getPercentage() {

  this.taskS.getTypePercentage().subscribe(res => {
    this.dataChart = []; 
    this.dataChartLabel = []
    this.result = res;
    this.dataChart = res.map((type:any) => type.count);
    this.dataChartLabel = res.map((type:any) => type.type);

    console.log(this.dataChart);
    console.log(this.dataChartLabel);

 
  this.chart = new Chart("myChart", {
    type: 'doughnut',
    
    data: { 
      labels: this.dataChart,
        datasets: [
          {
          
            data:  this.dataChart, 
            
            backgroundColor:[
              'rgba(248, 52, 94, 0.715)',
              'rgba(54, 162, 235, 0.710)',
              'rgba(255, 206, 86, 0.710)',
              'rgba(234, 167, 181, 0.715)',

            ],
          
        }]
    },
    options: {
      plugins: {

      },
        scales: {
            y: {
                beginAtZero: true
            }
        }, 
        
    }
  }) ;


} ) ;

}
}