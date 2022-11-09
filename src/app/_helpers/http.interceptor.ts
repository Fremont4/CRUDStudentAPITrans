
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { RegisterService } from "../Services/register.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private registerServices: RegisterService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
        // const accessToken = this.registerServices.getAccessToken();
        req = req.clone({
            // setHeaders: {
                // Authorization: `JWT $[accessToken}` 
            // }
        });
        return next.handle(req);
    }
}
