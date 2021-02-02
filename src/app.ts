import { inject } from 'aurelia-dependency-injection';
import { I18N } from "aurelia-i18n";
import { ValidationControllerFactory, ValidationRules, Validator,validateTrigger  } from 'aurelia-validation';
import { DialogService } from "aurelia-dialog";
import { Dialog } from "dialog";

interface todo{
  name:string;
}
@inject(I18N,ValidationControllerFactory,DialogService)
export class App {
  name:string;
  todo:todo;
  controller: any;
    constructor(private i18n:I18N, controllerFactory: ValidationControllerFactory,private dialogService : DialogService){
      this.controller = controllerFactory.createForCurrentScope();
      this.controller.validateTrigger = validateTrigger.changeOrBlur;
      ValidationRules
            .ensure('title')
            .required()
            .withMessage('asdasdasdsdsad')
            .on(this)
            .ensure('title1')
            .required()
            .withMessage('13123123')
            .on(this)
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
   
  public message = 'Hello World!';
}
