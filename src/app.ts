import { Applicant } from './Applicant';
import { PLATFORM } from "aurelia-framework";
import { inject } from 'aurelia-dependency-injection';
import { I18N } from "aurelia-i18n";
import { ValidationControllerFactory, ValidationRules, Validator,validateTrigger  } from 'aurelia-validation';
import { DialogService } from "aurelia-dialog";
import { Dialog } from "dialog";
import {RouterConfiguration, Router} from 'aurelia-router';
interface Applicant1 {
  Name:string;
  Familyname:string;
  Address:string;
  CountryOfOrigin:string;
  EMailAdress:string;
  Age:number;
  Hired:string;
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
  router: Router;
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
        model: {message : 'You Really sure to reset all the data?', title: 'Reset Data', action: this.action, action_cancel:this.action_cancel} }).whenClosed(response => {
      console.log(response);
      if (!response.wasCancelled) {
       this.controller.reset();
       this.emptyapplicant();
      } 
   });
  }
  //router
  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Contacts';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('./components/home/home'),   title: 'Select' },
      { route: 'success',  moduleId: PLATFORM.moduleName('./components/success/success'), name:'success' }
    ]);

    this.router = router;
  }

  //

 
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
    this.router.navigate('success');
  }
 public messege:string='asdsads';
}
