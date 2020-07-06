import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Role, Status} from '../../../../model/store-enum';
import {Login} from '../../../../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isArtisan = false;
  isAdmin = false;
  isCustomer = false;
  isTrader = false;
  providerId = '';

  constructor(private httpClient: HttpClient, private afAuth: AngularFireAuth) { }

  userRole(): Role {
    if (this.isTrader){
      return Role.TRADER;
    }
    if (this.isCustomer){
      return Role.CUSTOMER;
    }
    if (this.isAdmin){
      return Role.ADMIN;
    }
    if (this.isArtisan){
      return Role.ARTISAN;
    }
    return Role.NOT_REGISTERED;
  }

  async login(login: Login): Promise<Observable<Login>> {
    return await firebase.auth().signInWithEmailAndPassword(login.email, login.password).then((resp) => {
      this.providerId = resp.credential.providerId;
    }).catch((g) => {
        this.isCustomer = false;
        this.isArtisan = false;
        this.isAdmin = false;
        this.isCustomer = false;
        this.isTrader = false;
    })
      .then(() => {
      const loginObservable = this.httpClient.post<Login>('login', this.providerId);
      loginObservable.toPromise().then((resp) => {
        if (resp.status === Status.OK) {
          switch (resp.role) {
            case Role.ADMIN:
              this.isAdmin = true;
              break;
            case Role.CUSTOMER:
              this.isCustomer = true;
              break;
            case Role.TRADER:
              this.isTrader = true;
              break;
            case Role.ARTISAN:
              this.isTrader = true;
              break;
          }
        }
      });
      return loginObservable;
    });
  }

  resetPassword(): void {

  }

  register(email: string, password: string): void {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((resp) => {
      // this.providerId = resp.credential.providerId;
    });
  }

}
