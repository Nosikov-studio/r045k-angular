import { Injectable } from "@angular/core";
import {AuthService} from './auth.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Route, Router } from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(private auth: AuthService, private router: Router) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.auth.isA()) {
            req = req.clone({
                setHeaders: {
                    Authorization: this.auth.getToken()
                }
            })
        }
        return next.handle(req).pipe(
            catchError(
                (error: HttpErrorResponse) => this.handleAuthError(error)
            )
        )
    }

    private handleAuthError(error: HttpErrorResponse): Observable<any> {
        if (error.status === 401) {}
            this.router.navigate(['/auth'], {
                queryParams: {
                    sessionFailed: true
                }
            })
        return throwError(error)

    }

}