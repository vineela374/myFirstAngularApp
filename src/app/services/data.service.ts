import { Injectable } from "@angular/core";
import { Ibook } from "../ibook";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
@Injectable()
export class DataService {
  _http: any;
  _booksUrl:string = 'http://waelsbookservice.azurewebsites.net/books';
  constructor(private_http: Http) {}
  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error'; 
    console.error(errMsg); 
    return Observable.throw(errMsg);
   } 
   getBooks(): Observable<Ibook[]> { 
     return this._http.get(this._booksUrl+"/GetBooks") 
     .map((response: Response) => { 
       let data: Ibook[] = <Ibook[]>response.json(); 
       return data; }) 
       .catch(this.handleError); 
      }
  }


