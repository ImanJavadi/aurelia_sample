import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-dependency-injection';
import * as qs from 'querystringify';
@inject(HttpClient)
export class test{
  constructor(private httpClient:HttpClient) {

    
  }
  
   
   testapi(){


    this.httpClient.configure(config => {
      config
        
        .withDefaults({
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch'
          }
        })
        .withInterceptor({
          request(request) {
            console.log(`Requesting ${request.method} ${request.url}`);
            return request;
          },
          response(response) {
            console.log(`Received ${response.status} ${response.url}`);
            return response;
          }
        });
    });


    let path='https://jsonplaceholder.typicode.com/posts'
    let comment = {
      Id:78912,
      Customer: 'JasonSweet',
      Quantity: 1,
      Price: 18.00
    };
    
   this.httpClient.fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  
   }
}
