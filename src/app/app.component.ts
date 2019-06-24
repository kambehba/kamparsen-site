import { Component } from '@angular/core';
import { SiteService } from './siteService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'kamparsen-site';

  private currentWeekDay: string;
  private currentMonth: string;
  private currentDay: string;
  private currentYear: string;
  private currentTemp: number;
  private currentTime: string;

  private company: string;
  private jobtitle: string;
  private responsibalities: string;

  private educationImage: string;
  private camoziImages: string[] = ["../assets/i4.JPG", "../assets/i5.JPG", "../assets/i6.JPG", "../assets/i7.JPG", "../assets/i8.JPG", "../assets/i9.JPG",];
  private camozziImage: string;

  private show1999: boolean;
  private show2002: boolean;

  private showAbout: boolean;
  private showEducation: boolean;
  private showExperience: boolean;
  private showSkills: boolean;
  private showInterests: boolean;
  private showContact: boolean;

  private companyLogo: string;
  private honeywellLogo: string;

  private currentCamozziImageIndex : number

  private allMonth: string[] = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor(private siteService: SiteService) {
    this.siteService.GetDateTimeInfo();


  }

  ngOnInit() {
    this.siteService.timeDateModel.subscribe(timeData => {
      this.currentWeekDay = timeData.dayOfTheWeek;
      this.currentMonth = this.allMonth[Number(timeData.currentDateTime.substring(5, 7))];
      this.currentDay = timeData.currentDateTime.substring(8, 10);
      this.currentYear = timeData.currentDateTime.substring(0, 4);
      this.currentTime = timeData.currentDateTime.substring(11, 16);

      this.siteService.GetWeatherInfo();

      this.show1999 = false;
      this.currentCamozziImageIndex = 0;

    });

    this.siteService.weatherModel.subscribe(weatherData => {
      this.currentTemp = Math.floor(this.ConvertKelvinToFarenhite(weatherData.main.temp));
    });

    this.loadAbout();
  }


  ConvertKelvinToFarenhite(params: number): number {
    return (params - 273.15) * 1.8 + 32;
  }

  setComozziImages() {

  }



  ShowBachelorDegree() { this.educationImage = "../assets/i2.JPG"; }
  ShowSeniorDesign() { this.educationImage = "../assets/i3.JPG"; }
  ShowMasterDegree() { this.educationImage = "../assets/i1.JPG"; }


  Show1999() {
    this.show2002 = false;
    this.show1999 = true;

    this.company = "CAMOZZI , Pneumatic and Automation";
    this.companyLogo = "../assets/companyLogo.png";
    this.jobtitle = "Electrical and Automation  Engineer";
    this.responsibalities = "Electrical Panel design , PLC programming , Robotics and Automation."

    this.camozziImage = this.camoziImages[ this.currentCamozziImageIndex ];

  }

  Show2002() {
    this.show1999 = false;
    this.show2002 = true;

    this.company = "Honeywell , Pneumatic and Automation";
    this.honeywellLogo = "../assets/honeywellLogo.png";
    this.jobtitle = "Electrical and Automation  Engineer";
    this.responsibalities = "Electrical Panel design , PLC programming , Robotics and Automation."

  }

  prevImage(){
    this.currentCamozziImageIndex --;

    if( this.currentCamozziImageIndex <=0)  this.currentCamozziImageIndex =5;
   
    this.camozziImage = this.camoziImages[ this.currentCamozziImageIndex ];

  }

  nextImage(){
    this.currentCamozziImageIndex ++;

    if( this.currentCamozziImageIndex >= 5)  this.currentCamozziImageIndex =0;
   
    this.camozziImage = this.camoziImages[ this.currentCamozziImageIndex ];

  }

  loadAbout(){
    this.hideAllSections();
    this.showAbout = true;
    
  }

  loadEducation(){
    this.hideAllSections();
    this.showEducation = true;
    
  }

  loadExperience(){
    this.hideAllSections();
    this.showExperience = true;
    
  }

  loadSkills(){
    this.hideAllSections();
    this.showSkills = true;
    
  }

  loadInterests(){
    this.hideAllSections();
    this.showInterests = true;
    
  }

  loadContact(){
    this.hideAllSections();
    this.showContact = true;
    
  }

  hideAllSections(){
    this.showAbout = false;
    this.showEducation = false;
    this.showExperience = false;
    this.showSkills = false;
    this.showInterests = false;
    this.showContact = false;
  
  }


}