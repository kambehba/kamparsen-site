import { Component } from '@angular/core';
import {SiteService} from './siteService';
import { timingSafeEqual } from 'crypto';

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
     
    });
}





}
