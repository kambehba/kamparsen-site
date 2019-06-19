import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import {DateTimeModel} from './DateTimeModel';
import {SiteService} from './siteService';
import {Subject} from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [SiteService,DateTimeModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
