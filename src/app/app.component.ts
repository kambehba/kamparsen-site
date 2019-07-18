import { Component } from '@angular/core';
import { SiteService } from './siteService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'kamparsen-site';

  // private currentWeekDay: string;
  // private currentMonth: string;
  // private currentDay: string;
  // private currentYear: string;
  // private currentTemp: number;
  // private currentTime: string;

  private currentDate: string;
  private currentTemp: number;

  private company: string;
  private jobtitle: string;
  private responsibalities: string;
  private interestText: string;
  private interestTitle: string;

  private educationImage: string;
  private camoziImages: string[] = ["../assets/i4.JPG", "../assets/i5.JPG", "../assets/i6.JPG", "../assets/i7.JPG", "../assets/i8.JPG", "../assets/i9.JPG"];
  private espnImages: string[] = ["../assets/i11.PNG", "../assets/i12.PNG"];
  private raytheonImages: string[] = ["../assets/sigma.JPG", "../assets/i10.JPG"];
  private novaImages: string[] = ["../assets/nova.PNG","../assets/1.JPG", "../assets/2.JPG", "../assets/3.JPG","../assets/cfft-1.PNG","../assets/cfft-2.PNG","../assets/cfft-3.PNG"];
  private interestImages: string[] = ["../assets/i20.JPG", "../assets/i21.JPG", "../assets/i22.JPG","../assets/i23.JPG"];
  
  private camozziImage: string;
  private espnImage: string;
  private raytheonImage: string;
  private novaImage: string;
  private githubImage: string = "../assets/github.PNG";
  private interestImage: string;

  

  private show1999: boolean;
  private show2002: boolean;
  private show2008: boolean;
  private show2010: boolean;
  private show2013: boolean;
  private showGithub: boolean;

  private showAbout: boolean;
  private showEducation: boolean;
  private showExperience: boolean;
  private showSkills: boolean;
  private showInterests: boolean;
  private showContact: boolean;

  private showDesktopSkills: boolean;
  private showWebSkills: boolean;
  private showFirmwareSkills: boolean;

  private showInterest1:boolean;
  private showInterest2:boolean;
  private showInterest3:boolean;
  private showInterest4:boolean;
  private showInterest5:boolean;

  private companyLogo: string;


  private currentCamozziImageIndex: number;
  private currentEspnImageIndex: number;
  private currentRaytheonImageIndex: number;
  private currentNovaImageIndex: number;
  private currentInterestImageIndex : number;

  private allMonth: string[] = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor(private siteService: SiteService) {
   // this.siteService.GetDateTimeInfo();


  }

  ngOnInit() {

    
    this.currentDate = new Date().toDateString();
    this.siteService.GetWeatherInfo();
    this.interestText = '';
    this.interestTitle = '';
    this.hideAllExperinces();
    this.hideAllInterests();
    this.hideAllSkills();
    this.currentCamozziImageIndex = 0;
    this.currentEspnImageIndex = 0;
    this.currentNovaImageIndex = 0;
    this.currentInterestImageIndex = 0;
    this.currentRaytheonImageIndex = 0;
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
    
  }

  Show2008() {
    this.hideAllExperinces();
    this.show2008 = true;
    this.raytheonImage = this.raytheonImages[this.currentRaytheonImageIndex];
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

  ShowGithub() {
    this.hideAllExperinces();
    this.showGithub = true;
  
    this.githubImage =this.githubImage;
    this.company = "Github";
    this.companyLogo = "../assets/GitHubLogo.PNG";
    this.jobtitle = "Software Engineer";
    this.responsibalities = "Software Design and Impelemenation , CALL FOR FIRE (CFFT III) Trainer";

  }

  prevImage() {
    if (this.show1999) {
      this.currentCamozziImageIndex--;

      if (this.currentCamozziImageIndex <= 0) this.currentCamozziImageIndex = 5;

      this.camozziImage = this.camoziImages[this.currentCamozziImageIndex];

    }

    if (this.show2008) {
      this.currentRaytheonImageIndex--;
     
      if (this.currentRaytheonImageIndex <= 0) this.currentRaytheonImageIndex = 1;
      else this.currentRaytheonImageIndex = 0;

      this.raytheonImage = this.raytheonImages[this.currentRaytheonImageIndex];

     

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

    if (this.show2008) {
      this.currentRaytheonImageIndex++;

      if (this.currentRaytheonImageIndex > 1) this.currentRaytheonImageIndex = 0;

      this.raytheonImage = this.raytheonImages[this.currentRaytheonImageIndex];
    }

    if (this.show2010) {
      this.currentEspnImageIndex++;

      if (this.currentEspnImageIndex > 1) this.currentEspnImageIndex = 0;

      this.espnImage = this.espnImages[this.currentEspnImageIndex];
    }
    
    if (this.show2013) {
      this.currentNovaImageIndex++;

      if (this.currentNovaImageIndex > 7) this.currentNovaImageIndex = 0;

      this.novaImage = this.novaImages[this.currentNovaImageIndex];
    }

  }

  nextInterestImage(){
    
    if(this.showInterest1){ this.showInterest1 = false; this.showInterest2 = true;return;}
    if(this.showInterest2) {this.showInterest2 = false; this.showInterest3 = true;return;}
    if(this.showInterest3) {this.showInterest3 = false; this.showInterest4 = true;return;}
    if(this.showInterest4) {this.showInterest4 = false; this.showInterest5 = true;return;}
    if(this.showInterest5) {this.showInterest5 = false; this.showInterest1 = true;return;}
   
  }

  prevInterestImage(){
    
    if(this.showInterest1){ this.showInterest1 = false; this.showInterest5 = true;return;}
    if(this.showInterest2) {this.showInterest2 = false; this.showInterest1 = true;return;}
    if(this.showInterest3) {this.showInterest3 = false; this.showInterest2 = true;return;}
    if(this.showInterest4) {this.showInterest4 = false; this.showInterest3 = true;return;}
    if(this.showInterest5) {this.showInterest5 = false; this.showInterest4 = true;return;}
   
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
    this.hideAllInterests();
    this.showInterests = true;
   
    this.showInterest1 = true;
  }

  loadContact() {
    this.hideAllSections();
    this.showContact = true;

  }

  hideAllInterests(){
    this.showInterest1 = false;
    this.showInterest2 = false;
    this.showInterest3 = false;

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
    this.show2013 = false;
    this.showGithub = false;
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