import { Component } from '@angular/core';
import {AppService} from './app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kamparsen-site';

  constructor(private appService:AppService)
  {
    appService.dothis();
  }
}
