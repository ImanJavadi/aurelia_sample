import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-dependency-injection';
import { config } from './config';
import * as qs from 'querystringify';

export class apiservice{

  http=new HttpClient();

  setHeaders() {
    const headersConfig = {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
      
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
      body: json(body)
    };
    return this.http.fetch(`${config.api_url}${path}`,options);
  }

  postnewmoshtarek(path, body = {}) {
    alert(json(body))
    const options = {
      method: 'POST',
      headers: this.setHeaders(),
      body: json(body)
    };
    return this.http.fetch(`${config.api_url}${path}`,options);
  }

  upload(path, params, files, method = "POST") {
    let formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        formData.append(`files[${i}]`, files[i]);
    }

    return this.http.fetch(`${config.api_url}${path}?${qs.stringify(params)}`, {
        method: method,
        body: formData,
        headers: new Headers()
    }).then(response => alert(qs.stringify(params)))
    .catch(erroe=>alert(erroe))
}


}
