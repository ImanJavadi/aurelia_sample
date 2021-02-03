
import { inject } from 'aurelia-dependency-injection';
import { I18N } from "aurelia-i18n";
import { ValidationControllerFactory, ValidationRules, Validator,validateTrigger  } from 'aurelia-validation';
import { DialogService } from "aurelia-dialog";
import { Dialog } from "dialog";

interface Applicant1 {
  Name?:string;
  Familyname?:string;
  Address?:string;
  CountryOfOrigin?:string;
  EMailAdress?:string;
  Age?:number;
  Hired?:string;
}
@inject(I18N,ValidationControllerFactory,DialogService)
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
    constructor(private i18n:I18N, controllerFactory: ValidationControllerFactory,private dialogService : DialogService){
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
  }
  attached(): void {
  }
  openDialog() : void {
    this.dialogService.open( {viewModel: Dialog,
        model: {message : 'Message text...', title: 'Title text...', action: this.action, action_cancel:this.action_cancel} }).then(response => {
      console.log(response);
   });
  }
 
  action() : void {
    alert('OK button pressed');
  }
  action_cancel():void{
    alert('cancel button message');
  }
  chenge_locale(lan:string):void{
     this.i18n.setLocale(lan);
   }
  public message = 'Hello World!';
}
