import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TimeDateModel} from './TimeDateModel';
import {Subject} from 'rxjs';

@Injectable()
export class SiteService{

    public timeDateModel : Subject<TimeDateModel>;

    constructor(private http:HttpClient){
        this.timeDateModel = new Subject<TimeDateModel>();

    }

    GetDateTimeInfo()
    {
        this.http.get<TimeDateModel>('http://worldclockapi.com/api/json/est/now').subscribe(
            data=>{this.timeDateModel.next(data);
            
            });

    }

    GetWeatherInfo()
    {
        this.http.get<TimeDateModel>('http://api.openweathermap.org/data/2.5/weather?q=London').subscribe(
            data=>{console.log(data);
            
            });
    }

}