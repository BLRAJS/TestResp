import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';



@Injectable()
export class SearchServiceService {
  apiRoot = 'http://localhost:3000/airports';
  constructor(private http: Http) {}
  search(term: string): Observable<any> {
  if(term.length){
        return this.http.get(this.apiRoot)
        .map(res => {
          return res.json().filter((obj)=>{
          // CHECK each airport/city/name
          // if include  text from my input =<or>= part of my textinput
          // we could use startsWith or different way to search
          return obj.airport.city.name.toLowerCase().includes(term.toLowerCase()); 
          })
        });
    }else{
      return Observable.of([]);
    }
}

searchParam(urlparam): Observable<any> {
        return this.http.get(this.apiRoot)
        .map(res => {
          return res.json().filter((obj)=>{
          // CHECK each airport/city/name
          // if include  text from my input =<or>= part of my textinput
          return obj.airport.code==urlparam; 
          })
        });
}

}
