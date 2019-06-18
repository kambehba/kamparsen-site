
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DateTimeModel} from './DateTimeModel'

@Injectable()
export class AppService{

    constructor(private http: HttpClient)
    {
      
    }

    public dothis()
    {
        this.http.get('http://worldclockapi.com/api/json/est/now').subscribe(data=>{
       
        
           //console.log(data.contentItem[0]);
       });

    }



}