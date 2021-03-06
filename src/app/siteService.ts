import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DateTimeModel} from './DateTimeModel';
import {WeatherModel} from './WeatherModel';
import {Subject} from 'rxjs';

@Injectable()
export class SiteService{

    public timeDateModel : Subject<DateTimeModel>;
    public weatherModel : Subject<WeatherModel>;

    constructor(private http:HttpClient){
        this.timeDateModel = new Subject<DateTimeModel>();
        this.weatherModel = new Subject<WeatherModel>();

    }

    GetDateTimeInfo()
    {
        // this.http.get<DateTimeModel>('http://worldclockapi.com/api/json/est/now').subscribe(
        //     data=>{this.timeDateModel.next(data);
        //     console.log(data.currentDateTime);
        //     });

        // this.http.get<DateTimeModel>('https://timezonedb.p.rapidapi.com/?zone=America%2FLos_Angeles&time=1358474681&lat=34.048108&lng=-118.244705&format=xml').subscribe(
        //     data=>{this.timeDateModel.next(data);
        //     console.log(data.currentDateTime);
        //     });

    }

    GetWeatherInfo()
    {
        this.http.get<WeatherModel>('https://api.openweathermap.org/data/2.5/weather?zip=34787,us&APPID=48c9253d856985a9b820967927888247').subscribe(
            data=>{this.weatherModel.next(data);
                console.log(data.main.temp);
            }); 
    }

}