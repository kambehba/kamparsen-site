import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DateTimeModel} from './DateTimeModel';
import {Subject} from 'rxjs';

@Injectable()
export class SiteService{

    public timeDateModel : Subject<DateTimeModel>;

    constructor(private http:HttpClient){
        this.timeDateModel = new Subject<DateTimeModel>();

    }

    GetDateTimeInfo()
    {
        this.http.get<DateTimeModel>('http://worldclockapi.com/api/json/est/now').subscribe(
            data=>{this.timeDateModel.next(data);
            
            });

    }

    GetWeatherInfo()
    {
        this.http.get<DateTimeModel>('http://api.openweathermap.org/data/2.5/weather?q=London').subscribe(
            data=>{console.log(data);
            
            }); //kghjhg
    }

}