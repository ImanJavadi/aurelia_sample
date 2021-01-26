import { time } from "console";
import { getMaxListeners } from "process";
import {HttpClient} from 'aurelia-fetch-client';
interface user{
  email:string;
  name:string;
}
export class App {
  users:user[]=[];
  
  email:string='';
  name:string='';
  message:string='';
  customcss:string="red";
  status:string;
  
  adduser()
  {
    if(this.email&&this.name)
    {
    this.users.push(
      {email:this.email,name:this.name}
      );
      this.email='';
      this.name='';
      this.message='SUCCESS';

    }
  }
  removeuser(user)
  {
    let index=this.users.indexOf(user);
    this.users.splice(index,1);
    console.log('delete');
  }
  
  created() {
    let httpClient = new HttpClient();

    httpClient.configure(config => {
      config
        .withBaseUrl('https://jsonplaceholder.typicode.com/')
        .withDefaults({
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch'
          }
        })
        .withInterceptor({
          request(request) {
            console.log(`Requesting ${request.method} ${request.url}`);
            let status1=request.method;
            return request;
          },
          response(response) {
            console.log(`Received ${response.status} ${response.url}`); 
            
            return response;
          }
        });
    });
    
    httpClient.fetch('users')
    .then(response => response.json())
    .then(data=> this.users=data)
    .catch((error) => {
      alert(error);
    });
   
    

    this.users=[{email:'iman@gmail.com',name:'123456'}];
  }
  
}
