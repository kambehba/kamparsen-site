import { Component } from '@angular/core';
import {SiteService} from './siteService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kamparsen-site';

  private currentDateTime : string;
  constructor(private siteService: SiteService){
    this.siteService.GetDateTimeInfo();
    this.currentDateTime = 'f';
  }

  ngOnInit(){
    this.siteService.currentDate.subscribe(ss=>{
    this.currentDateTime = ss;
   
     
    });
  
 }



}
