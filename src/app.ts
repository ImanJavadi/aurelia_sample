import { time } from "console";
import { getMaxListeners } from "process";

interface user{
  email:string;
  password:string;
}

export class App {
  users:user[]=[];
  email:string='';
  password:string='';
  message:string='';
  customcss:string="red";
  
  adduser()
  {
    if(this.email&&this.password)
    {
    this.users.push(
      {email:this.email,password:this.password}
      );
      this.email='';
      this.password='';
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
    this.users=[{email:'iman@gmail.com',password:'123456'}];
  }

}
