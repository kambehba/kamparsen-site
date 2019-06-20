import { Component } from '@angular/core';
import {SiteService} from './siteService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'kamparsen-site';

  private currentWeekDay : string;
  private currentMonth : string;
  private currentDay : string;
  private currentYear : string;
  private currentTemp : number;
  private currentTime : string;

  private allMonth : string[] = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  constructor(private siteService: SiteService){
  this.siteService.GetDateTimeInfo();
  
  
}

  ngOnInit(){
    this.siteService.timeDateModel.subscribe(timeData=>{
    this.currentWeekDay = timeData.dayOfTheWeek;
    this.currentMonth = this.allMonth[Number(timeData.currentDateTime.substring(5,7))];
    this.currentDay = timeData.currentDateTime.substring(8,10);
    this.currentYear = timeData.currentDateTime.substring(0,4);
    this.currentTime = timeData.currentDateTime.substring(11,16);

    this.siteService.GetWeatherInfo();
     
    });

    this.siteService.weatherModel.subscribe(weatherData=>{
      this.currentTemp = Math.floor(this.ConvertKelvinToFarenhite(weatherData.main.temp));
    });
}


ConvertKelvinToFarenhite(params:number) : number{
  return (params-273.15) * 1.8 + 32;
}





}