import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
export class Page{
  pageNo:Number;
  pageSize : Number;
  constructor(pageNo:Number,
    pageSize : Number){
      this.pageNo = pageNo;
      this.pageSize = pageSize;
    }

}
@Injectable({
  providedIn: 'root'
})
export class PageableListService {

  endpoint: string = 'http://localhost:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  public getData(page : Page){
   
    return this.http.get<any>(`${this.endpoint}/dummy?pageNo=`+page.pageNo + '&pageSize='+page.pageSize );
       
  }



}
