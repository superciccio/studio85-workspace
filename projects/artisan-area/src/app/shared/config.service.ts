import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Config} from '../../../../model/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient, ) { }

  private config: Config = null;

  async getConfig(): Promise<Config> {
    if (this.config === null){
      [this.config] = await Promise.all([this.http.get<Config>(environment.apiEndpoint + '/config').toPromise()]);
    }
    return this.config;
  }
}
