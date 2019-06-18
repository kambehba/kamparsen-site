import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TimeDateModel} from './TimeDateModel';
import {Subject} from 'rxjs';

@Injectable()
export class SiteService{

    public currentDate : Subject<string>;

    constructor(private http:HttpClient, private timeDateModel: TimeDateModel ){
        this.currentDate = new Subject<string>();

    }

    GetDateTimeInfo()
    {
        this.http.get<TimeDateModel>('http://worldclockapi.com/api/json/est/now').subscribe(
            data=>{this.currentDate.next(data.currentDateTime);});

    }

}