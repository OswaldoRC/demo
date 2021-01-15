import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
export class Service {
    public url: string;

    constructor() {
        this.url = "http://localhost:8080";

    }

    protected getApiRoute(route: string) {
        return this.url + route;
    }

    get headers() {
        let authToken = localStorage.getItem('auth_token');
        let headers = new HttpHeaders();
            headers = headers.append('Content-Type', 'application/json');

        if(authToken !== null && authToken !== 'undefined')
            headers = headers.append('Authorization', `Bearer ${authToken}`);

        return { headers: headers };
    }

    get skipInterceptorHeaders() {
        //let authToken = localStorage.getItem('auth_token');
        let headers = new HttpHeaders({
            'X-Skip-Interceptor': '',
            'Content-Type': 'application/json'
        });

        /* if(authToken !== null && authToken !== 'undefined')
            headers = headers.append('Authorization', `Bearer ${authToken}`);
 */
        return { headers: headers };
    }
 }
export const InterceptorSkip = 'X-Skip-Interceptor';

export const InterceptorSkipHeader = new HttpHeaders({
  'X-Skip-Interceptor': ''
});