import { PLATFORM } from "aurelia-framework";
import { inject } from 'aurelia-dependency-injection';
import { I18N } from "aurelia-i18n";
import { ValidationControllerFactory, ValidationRules, Validator,validateTrigger  } from 'aurelia-validation';
import { DialogService } from "aurelia-dialog";
import { Dialog } from "components/dialog/dialog";
import {RouterConfiguration, Router} from 'aurelia-router';
import {HttpClient} from 'aurelia-fetch-client';
interface Applicant1 {
  Name:string;
  Familyname:string;
  Address:string;
  CountryOfOrigin:string;
  EMailAdress:string;
  Age:number;
  Hired:string;
}
@inject(I18N,ValidationControllerFactory,DialogService,Router)
export class App {
  //name:string;
  Applicant={
    Name:'',
    Familyname:'',
    Address:'',
    CountryOfOrigin:'',
    EMailAdress:'',
    Age:'',
    Hired:''
  }
  controller: any;
    constructor(private i18n:I18N, controllerFactory: ValidationControllerFactory,private dialogService : DialogService,private router:Router){
      this.controller = controllerFactory.createForCurrentScope();
      this.controller.validateTrigger = validateTrigger.changeOrBlur;
      ValidationRules
            .ensure('title')
            .required()
            .withMessage('test')
            .on(this)
            .ensure('title1')
            .required()
            .withMessage('13123123')
            .on(this)
            .ensure('Name')
            .required()
            .minLength(5)
            .withMessage('tetst1 name')
            .ensure('Familyname')
            .required()
            .minLength(5)
            .withMessage('tetst2 ')
            .ensure('Address')
            .required()
            .minLength(10)
            .withMessage('tetst3')
            .ensure('CountryOfOrigin')
            .required()
            .minLength(10)
            .withMessage('tetst4')
            .ensure('EMailAdress')
            .required()
            .email()
            .withMessage('tetst5')
            .ensure('Age')
            .required()
            .range(20,60)
            .withMessage('tetst6')
            .ensure('Hired')
            .required()
            .withMessage('tetst6')
            .on(this.Applicant);

      this.i18n.setLocale('en');
      this.router=router;
  }
  attached(): void {
  }
  openDialog(message:string,title:string,cancelebtn:boolean,dialogtype:string) : void {
    this.dialogService.open( {viewModel: Dialog,
        model: {message : message, title:title, action: this.action, action_cancel:this.action_cancel,cancelebtn:cancelebtn} }).whenClosed(response => {
      console.log(response);
      if(dialogtype=='reset')
      {
         if (!response.wasCancelled) {
           this.controller.reset();
           this.emptyapplicant();
         } 
      }
   });
  }

  action() : void {
    
    console.log('test');
  }
  action_cancel():void{
   
  }
  chenge_locale(lan:string):void{
     this.i18n.setLocale(lan);
   }
  countrycheck()
  {
    //alert('test');
  }
  get canSave() {
    return this.Applicant.Name  || this.Applicant.Address || this.Applicant.Age || this.Applicant.CountryOfOrigin || this.Applicant.EMailAdress;
  }
  get canSend()
  {
    return this.Applicant.Name  && this.Applicant.Address && this.Applicant.Age && this.Applicant.CountryOfOrigin && this.Applicant.EMailAdress;
  }
  emptyapplicant()
  {
    this.Applicant.Name='';
    this.Applicant.Familyname='';
    this.Applicant.Address='';
    this.Applicant.CountryOfOrigin='';
    this.Applicant.EMailAdress='';
    this.Applicant.Age='';
    this.Applicant.Hired='';
  }
  send()
  {
    let httpClient = new HttpClient();

    httpClient.configure(config => {
      config
        .withBaseUrl('https://jsonplaceholder.typicodes.com/')
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
    .then(data=> {
      this.router.navigateToRoute('success');
    })
    .catch((error) => {
      this.openDialog('the sending was not successful','Error',false,'error');
    });
    
  }
 public messege:string='asdsads';
}
