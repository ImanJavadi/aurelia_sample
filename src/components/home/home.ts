import { PLATFORM } from "aurelia-framework";
import { inject } from 'aurelia-dependency-injection';
import { I18N } from "aurelia-i18n";
import { ValidationControllerFactory, ValidationRules, Validator,validateTrigger  } from 'aurelia-validation';
import { DialogService } from "aurelia-dialog";
import { Dialog } from "components/dialog/dialog";
import {RouterConfiguration, Router} from 'aurelia-router';
import {HttpClient} from 'aurelia-fetch-client';
import { Applicant } from "gobal/model/Applicant";
import { apiservice } from "gobal/services/api-service";
import * as qs from 'querystringify';

@inject(I18N,DialogService,Router,Applicant,apiservice,ValidationControllerFactory)
export class App {

  controller: any;
  statusheird = ['Yes', 'No'];
  countrystatus:boolean=true;
  constructor(private i18n:I18N,private dialogService : DialogService,private router:Router,private Applicant:Applicant,private api:apiservice,controllerFactory: ValidationControllerFactory){
    this.controller = controllerFactory.createForCurrentScope();
      this.i18n.setLocale('en');
      this.router=router;  
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
  countrycheck()
  {
    this.api.getcountery(this.Applicant.CountryOfOrigin)
    .then(Response=>{
      if(Response.status==200)
      {
        this.countrystatus=true;
      }
      else if(Response.status==404)
      {
        this.countrystatus=false;
      }

    })
    .catch(erroe=>
      {
        this.countrystatus=false;
      })
  }
  get canReset() {
    return this.Applicant.Name  || this.Applicant.Address || this.Applicant.Age || this.Applicant.CountryOfOrigin || this.Applicant.EMailAdress || this.Applicant.Hired;
  }
  get canSend()
  {
    return this.Applicant.Name  && this.Applicant.Address && this.Applicant.Age && this.Applicant.CountryOfOrigin && this.Applicant.EMailAdress && this.countrystatus &&  this.Applicant.Hired;
  }
  emptyapplicant()
  {
    //this.controller.reset();
    this.Applicant=null;
  }
  send()
  {
    let body={
      id: 0,
      name: this.Applicant.Name,
      familyName: this.Applicant.Familyname,
      address: this.Applicant.Address,
      countryOfOrigin: this.Applicant.CountryOfOrigin,
      emailAddress: this.Applicant.EMailAdress,
      age: this.Applicant.Age,
      hired: this.Applicant.Hired
    }
  this.api.post('CreateUser',body)
  .then(Response=>{
    if(Response.status==201){
    
      this.router.navigateToRoute('success');
    }
    else{
      this.openDialog('the sending was not successful11','Error',false,'error');
    }

  })
  .catch((error)=>{
    alert(error)
    this.openDialog('the sending was not successful','Error',false,'error');
  })
  }
  
 
}
