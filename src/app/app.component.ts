import { Component } from '@angular/core';
import { SiteService } from './siteService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Kam Parsen';


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
  private novaImages: string[] = ["../assets/nova.PNG", "../assets/1.JPG", "../assets/2.JPG", "../assets/3.JPG", "../assets/cfft-1.PNG", "../assets/cfft-2.PNG", "../assets/cfft-3.PNG"];
  private interestImages: string[] = ["../assets/i20.JPG", "../assets/i21.JPG", "../assets/i22.JPG", "../assets/i23.JPG"];

  private camozziImage: string;
  private espnImage: string;
  private raytheonImage: string;
  private novaImage: string;
  private githubImage: string = "../assets/github.PNG";
  private interestImage: string;
  private bsImage: string = "../assets/i2.JPG"


  private showEducationMaster: boolean;
  private showEducationBachelor: boolean;
  private showEducationCertificate: boolean;

  private showExperince1: boolean;
  private showExperince2: boolean;
  private showExperince3: boolean;
  private showExperince4: boolean;
  private showExperince5: boolean;
  private showExperince6: boolean;

  private show1999: boolean;
  private show2002: boolean;
  private show2008: boolean;
  private show2010: boolean;
  private show2013: boolean;
  private showGithub: boolean;

  private showNav: boolean;
  private showNav2: boolean;
  private showNav3: boolean;
  private showNav4: boolean;
  private showNav5: boolean;

  private buttonClicked : boolean;


  private showAbout: boolean;
 
  private showExperience: boolean;
  private showInterests: boolean;
  private showContact: boolean;

  private showDesktopSkills: boolean;
  private showWebSkills: boolean;
  private showFirmwareSkills: boolean;

  private showSkill1: boolean;
  private showSkill2: boolean;
  private showSkill3: boolean;

  private showInterest1: boolean;
  private showInterest2: boolean;
  private showInterest3: boolean;
  private showInterest4: boolean;
  private showInterest5: boolean;

  private companyLogo: string;


  private currentCamozziImageIndex: number;
  private currentEspnImageIndex: number;
  private currentRaytheonImageIndex: number;
  private currentNovaImageIndex: number;
  private currentInterestImageIndex: number;

  private allMonth: string[] = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor(private siteService: SiteService) {
    // this.siteService.GetDateTimeInfo();


  }

  ngOnInit() {

    this.hideAll();
    this.hideAllNav();

    this.buttonClicked = false;


    this.showNav = true;
    

    this.currentDate = new Date().toDateString();
    this.siteService.GetWeatherInfo();
    this.interestText = '';
    this.interestTitle = '';
   
    this.hideAllInterests();
   
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

  hideAll() {
    this.showAbout = false;
    this.showInterests = false;
    this.showEducationMaster = false;
    this.showEducationBachelor = false;
    this.showEducationCertificate = false;
    this.showExperince1 = false;
    this.showExperince2 = false;
    this.showExperince3 = false;
    this.showExperince4 = false;
    this.showExperince5 = false;
    this.showSkill1 = false;
    this.showSkill2 = false;
    this.showSkill3 = false;
    this.showInterest1 = false;
    this.showInterest2 = false;
    this.showInterest3 = false;
    this.showInterest4 = false;
    this.showContact = false;
  }

  hideAllNav()
  {
    this.showNav = false ;
    this.showNav2 = false;
    this.showNav3 = false;
    this.showNav4 = false;
    this.showNav5 = false;
  }

  ShowExperince(level: string) {
    this.hideAll();


    switch (level) {
      case 'e1':
        this.showExperince1 = true;
        break;
      case 'e2':
        this.showExperince2 = true;
        break;
      case 'e3':
        this.showExperince3 = true;
        break;
      case 'e4':
        this.showExperince4 = true;
        break;
      case 'e5':
        this.showExperince5 = true;
        break;
    }

  }

  showEducation(educationOption: string) {
    this.hideAll();


    switch (educationOption) {
      case 'm': {
        this.showEducationMaster = true;
        this.buttonClicked = true;
        break;
      }

      case 'b': {
        this.showEducationBachelor = true;
       
        break;
      }

      case 'c': {
        this.showEducationCertificate = true;
        break;
      }
    }

  }

  Showskill(skillsOption: string) {

    this.hideAll();
    

    switch (skillsOption) {
      case 's1': {
        this.showSkill1 = true;
        break;
      }

      case 's2': {
        this.showSkill2 = true;
        break;
      }

      case 's3': {
        this.showSkill3 = true;
        break;
      }
    }
  }


  Showinterest(interestOption: string) {

    this.hideAll();
   

    switch (interestOption) {
      case 'i1': {
        this.showInterest1 = true;
        break;
      }

      case 'i2': {
        this.showInterest2 = true;
        break;
      }

      case 'i3': {
        this.showInterest3 = true;
        break;
      }

      case 'i4': {
        this.showInterest4 = true;
        break;
      }
    }


  }

  loadAbout() {
   
    this.showAbout = true;

  }

  loadEducation() {
    this.hideAll();
    this.showNav = false;
    this.showNav2 = true;
    this.showEducationMaster = true;
    this.showAbout = false;

  }



  loadExperience() {
    this.hideAll();
    this.showNav3 = true;
    this.showNav = false;
    this.showNav2 = false;
    this.showExperince1 = true;
    this.showAbout = false;

  }

  loadSkills() {
    this.hideAll();
    this.hideAllNav();

    this.showNav4 = true;
    this.showSkill1 = true;
    
  }

  loadInterests() {
    this.hideAll();
    this.hideAllNav();
    this.showNav5 = true;
    this,this.showInterest1 = true;
  
  }

  loadContact() {
    this.hideAll();
    this.showContact = true;

  }

  hideAllInterests() {
    this.showInterest1 = false;
    this.showInterest2 = false;
    this.showInterest3 = false;

  }

  back(option: string) {

    this.hideAll();
    this.hideAllNav();
    this.showNav = true;
    this.showAbout = true;
  }

  

  backFromExperience() {
    this.hideAll();
    this.showNav = true;
    this.showNav2 = false;
    this.showNav3 = false;
    this.showNav4 = false;
    this.showEducationMaster = false;
    this.showAbout = true;
  }


  ConvertKelvinToFarenhite(params: number): number {
    return (params - 273.15) * 1.8 + 32;
  }


  ShowGithub() {
    
    this.showGithub = true;

    this.githubImage = this.githubImage;
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

  nextInterestImage() {

    if (this.showInterest1) { this.showInterest1 = false; this.showInterest2 = true; return; }
    if (this.showInterest2) { this.showInterest2 = false; this.showInterest3 = true; return; }
    if (this.showInterest3) { this.showInterest3 = false; this.showInterest4 = true; return; }
    if (this.showInterest4) { this.showInterest4 = false; this.showInterest5 = true; return; }
    if (this.showInterest5) { this.showInterest5 = false; this.showInterest1 = true; return; }

  }

  prevInterestImage() {

    if (this.showInterest1) { this.showInterest1 = false; this.showInterest5 = true; return; }
    if (this.showInterest2) { this.showInterest2 = false; this.showInterest1 = true; return; }
    if (this.showInterest3) { this.showInterest3 = false; this.showInterest2 = true; return; }
    if (this.showInterest4) { this.showInterest4 = false; this.showInterest3 = true; return; }
    if (this.showInterest5) { this.showInterest5 = false; this.showInterest4 = true; return; }

  }

}