import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TimeDateModel} from './TimeDateModel';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SiteService} from './siteService';
import {Subject} from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [SiteService,TimeDateModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
