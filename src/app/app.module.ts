import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import {DateTimeModel} from './DateTimeModel';
import {SiteService} from './siteService';
import {Subject} from 'rxjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,BrowserAnimationsModule,MatCheckboxModule,MatMenuModule
  ],
  providers: [SiteService,DateTimeModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
