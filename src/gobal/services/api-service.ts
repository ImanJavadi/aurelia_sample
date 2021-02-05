import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-dependency-injection';
import { config } from './config';
import * as qs from 'querystringify';

export class apiservice{

  http=new HttpClient();

  setHeaders() {
    const headersConfig = {
      'Content-Type': 'pplication/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    return new Headers(headersConfig);
  }
 
  get(path:string,params:any) {
    const options = {
      method: 'GET',
      headers: this.setHeaders()
    };

    return this.http.fetch(`${config.api_url}${path}?${qs.stringify(params)}`,options);
  }
  getcountery(country:string)
  {
    const options = {
      method: 'GET',
      headers: this.setHeaders()
    };
    
    return this.http.fetch(`${config.api_url_country}${country}?fullText=true`);

  }

  post(path, body = {}) {
    const options = {
      method: 'POST',
      headers: this.setHeaders(),
      mode : 'no-cors',
      body: json(body)
    };
    return this.http.fetch(`${config.api_url}${path}`,options);
  }


}
