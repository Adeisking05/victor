import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FetchfromserverService {
 url :string = 'localhost:8000'
  constructor(private http:HttpClient,) { }

  gethomegridcategory(){
    return this.http.get(this.url +'/homecategorydata')

  }

}
