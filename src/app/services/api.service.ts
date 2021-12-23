import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from 'src/app/services/api.config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url:any;

  constructor(public http: HttpClient) {
  }

  get(url:any, params?: any, reqOpts?: any) {
    return this.http.get(this.url+url, reqOpts );
  }

  post(url:any, body: any, reqOpts?: any) {
    return this.http.post(this.url+url, body, reqOpts);
  }

  put(url:any, body: any, reqOpts?: any) {
    return this.http.put(this.url+url, body, reqOpts);
  }
}