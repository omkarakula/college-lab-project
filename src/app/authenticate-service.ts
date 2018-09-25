import { Injectable } from '@angular/core';
// import { Headers, Http ,RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions }
    from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class authenticate {
    private AppUrl = "http://localhost/api/";
    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ "Content-Type": "application/json", 'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
    }
    authenticateService(user:any): Observable<any> {
        let header = new Headers();
        header.append('Content-Type',  'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http
            .post(this.AppUrl+'login', user, { headers: header })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    register_student(student:any): Observable<any> {
        let header = new Headers();
        header.append('Content-Type',  'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http
        .post(this.AppUrl+'saveStudent', student, { headers: header })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    register_faculty(employee:any): Observable<any> {
        let header = new Headers();
        header.append('Content-Type',  'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http
        .post(this.AppUrl+'saveEmployee', employee, { headers: header })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    get_emp(): Observable<any> {
        let header = new Headers();
        header.append('Content-Type',  'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http
        .get(this.AppUrl+'getEmployee', { headers: header })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    get_student(): Observable<any> {
        let header = new Headers();
        header.append('Content-Type',  'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http
        .get(this.AppUrl+'getStudents', { headers: header })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    save_lab_info(lab_info:any): Observable<any> {
        let header = new Headers();
        header.append('Content-Type',  'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http
        .post(this.AppUrl+'saveLabs', lab_info, { headers: header })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    get_labs(): Observable<any> {
        let header = new Headers();
        header.append('Content-Type',  'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http
        .get(this.AppUrl+'getLabs', { headers: header })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    get_times(): Observable<any> {
        let header = new Headers();
        header.append('Content-Type',  'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http
        .get(this.AppUrl+'getTimeTables', { headers: header })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    update_stat(dataupdate:any): Observable<any> {
        let header = new Headers();
        header.append('Content-Type',  'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http
        .post(this.AppUrl+'updateStat', dataupdate, { headers: header })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    get_faculty_name(): Observable<any> {
        let header = new Headers();
        header.append('Content-Type',  'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http
        .get(this.AppUrl+'getFacultyData', { headers: header })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}