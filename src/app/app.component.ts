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
  private camoziImages: string[] = ["../assets/i4.JPG", "../assets/i5.JPG", "../assets/i6.JPG", "../assets/i7.JPG", "../assets/i8.JPG", "../assets/i9.JPG"];
  private espnImages: string[] = ["../assets/i11.png", "../assets/i12.png"];
  private novaImages: string[] = ["../assets/1.jpg", "../assets/2.jpg","../assets/3.jpg"];
  private camozziImage: string;
  private espnImage: string;
  private novaImage: string;

  private raytheonImage: string;

  private show1999: boolean;
  private show2002: boolean;
  private show2008: boolean;
  private show2010: boolean;
  private show2013: boolean;

  private showAbout: boolean;
  private showEducation: boolean;
  private showExperience: boolean;
  private showSkills: boolean;
  private showInterests: boolean;
  private showContact: boolean;

  private showDesktopSkills: boolean;
  private showWebSkills: boolean;
  private showFirmwareSkills: boolean;

  private companyLogo: string;


  private currentCamozziImageIndex: number
  private currentEspnImageIndex: number
  private currentNovaImageIndex: number

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
      this.hideAllSkills();

      this.hideAllExperinces();
      this.currentCamozziImageIndex = 0;
      this.currentEspnImageIndex = 0;
      this.currentNovaImageIndex = 0;

    });

    this.siteService.weatherModel.subscribe(weatherData => {
      this.currentTemp = Math.floor(this.ConvertKelvinToFarenhite(weatherData.main.temp));
    });

    this.loadAbout();

  }


  ConvertKelvinToFarenhite(params: number): number {
    return (params - 273.15) * 1.8 + 32;
  }



  ShowBachelorDegree() { this.educationImage = "../assets/i2.JPG"; }
  ShowSeniorDesign() { this.educationImage = "../assets/i3.JPG"; }
  ShowMasterDegree() { this.educationImage = "../assets/i1.JPG"; }


  Show1999() {
    this.hideAllExperinces();
    this.show1999 = true;

    this.company = "CAMOZZI , Pneumatic and Automation";
    this.companyLogo = "../assets/companyLogo.png";
    this.jobtitle = "Electrical and Automation  Engineer";
    this.responsibalities = "Electrical Panel design , PLC programming , Robotics and Automation."
    this.camozziImage = this.camoziImages[this.currentCamozziImageIndex];

  }

  Show2002() {
    this.hideAllExperinces();
    this.show2002 = true;

    this.company = "Honeywell";
    this.companyLogo = "../assets/honeywellLogo.png";
    this.jobtitle = "Electrical , BMS, BAS  Engineer";
    this.responsibalities = "Smart Building design for HVAC systems. "

  }

  Show2008() {
    this.hideAllExperinces();
    this.show2008 = true;
    this.raytheonImage = "../assets/i10.JPG";
    this.company = "Raytheon";
    this.companyLogo = "../assets/raytheonLogo.jpg";
    this.jobtitle = "Software Engineer";
    this.responsibalities = "Design and Impelemenation of Mission Managment System "

  }

  Show2010() {
    this.hideAllExperinces();
    this.show2010 = true;
    this.espnImage = this.espnImages[this.currentEspnImageIndex];
    this.company = "ESPN";
    this.companyLogo = "../assets/espnLogo.png";
    this.jobtitle = "Software Engineer";
    this.responsibalities = "Design and Impelemenation of Mission Managment System "

  }

  Show2013() {
    this.hideAllExperinces();
    this.show2013 = true;
    this.novaImage = this.novaImages[this.currentNovaImageIndex];
    this.company = "Nova Techhologies";
    this.companyLogo = "../assets/novaLogo.jpg";
    this.jobtitle = "Software Engineer";
    this.responsibalities = "Software Design and Impelemenation , CALL FOR FIRE (CFFT III) Trainer";

  }

  prevImage() {
    if (this.show1999) {
      this.currentCamozziImageIndex--;

      if (this.currentCamozziImageIndex <= 0) this.currentCamozziImageIndex = 5;

      this.camozziImage = this.camoziImages[this.currentCamozziImageIndex];

    }

    if (this.show2010) {
      this.currentEspnImageIndex--;

      if (this.currentEspnImageIndex <= 0) this.currentEspnImageIndex = 1;

      this.espnImage = this.espnImages[this.currentEspnImageIndex];

    }

    if (this.show2013) {
      this.currentNovaImageIndex--;

      if (this.currentNovaImageIndex <= 0) this.currentNovaImageIndex = 1;

      this.novaImage = this.novaImages[this.currentNovaImageIndex];

    }
  }

  nextImage() {
    if (this.show1999) {
      this.currentCamozziImageIndex++;

      if (this.currentCamozziImageIndex > 5) this.currentCamozziImageIndex = 0;

      this.camozziImage = this.camoziImages[this.currentCamozziImageIndex];
    }

    if (this.show2010) {
      this.currentEspnImageIndex++;

      if (this.currentEspnImageIndex > 1) this.currentEspnImageIndex = 0;

      this.espnImage = this.espnImages[this.currentEspnImageIndex];
    }

    if (this.show2013) {
      this.currentNovaImageIndex++;

      if (this.currentNovaImageIndex > 2) this.currentNovaImageIndex = 0;

      this.novaImage = this.novaImages[this.currentNovaImageIndex];
    }

  }

  loadAbout() {
    this.hideAllSections();
    this.showAbout = true;

  }

  loadEducation() {
    this.hideAllSections();
    this.showEducation = true;

  }

  loadExperience() {
    this.hideAllSections();
    this.showExperience = true;

  }

  loadSkills() {
    this.hideAllSections();
    this.hideAllExperinces();
    this.hideAllSkills();
    this.showSkills = true;
    this.showDesktopSkills = true;

  }

  loadInterests() {
    this.hideAllSections();
    this.showInterests = true;

  }

  loadContact() {
    this.hideAllSections();
    this.showContact = true;

  }

  hideAllSections() {
    this.showAbout = false;
    this.showEducation = false;
    this.showExperience = false;
    this.showSkills = false;
    this.showInterests = false;
    this.showContact = false;

  }

  hideAllExperinces() {
    this.show1999 = false;
    this.show2002 = false;
    this.show2008 = false;
    this.show2010 = false;
  }

  hideAllSkills() {
    this.showDesktopSkills = false;
    this.showWebSkills = false;
    this.showFirmwareSkills = false;


  }

  ShowDesktopSkills() {
    this.hideAllSkills();
    this.showDesktopSkills = true;

  }

  ShowWebSkills() {
    this.hideAllSkills();
    this.showWebSkills = true;

  }

  ShowFirmwareSkills() {
    this.hideAllSkills();
    this.showFirmwareSkills = true;

  }


}