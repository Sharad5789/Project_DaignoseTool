import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpHeaders,
  HttpEvent,
  HttpClient
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private router: Router,
    public http: HttpClient
  ){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error("Method not implemented.");
  }

}
