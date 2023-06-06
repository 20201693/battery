import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { AngularFireAuth , AngularFireAuthModule} from '@angular/fire/compat/auth';
import { Cab } from './datatype';
@Injectable({
  providedIn: 'root'
})
export class JsonService {
  getdata() {
    throw new Error('Method not implemented.');
  }

  constructor( private http : HttpClient , private fireauth:AngularFireAuthModule) { }
 

  
 url = "http://localhost:3000/users";
 url1 = "http://localhost:3000/email";
 url2 = "http://localhost:3000/newpass";
 url3 = "http://localhost:3000/otp";
 url4 = "http://localhost:3000/otpget";
 
  postdata(data:any){
    return this.http.post(this.url , data);
  }
  forgetform(email:any){
    return this.http.post(this.url1, email);
  }

newpassward(newpass:any){
return this.http.post(this.url2, newpass);

}

otpget(){
  return this.http.get(this.url4);
}

 

  apiurl<T>(apiurl: any): Observable<Element> {
    throw new Error('Method not implemented.');
  }
  getAll():Observable<Cab[]>{
    return this.http.get<Cab[]>("http://localhost:3000/cab");
  
  }
  
}
export { Cab };

