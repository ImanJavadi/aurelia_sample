import { inject } from 'aurelia-dependency-injection';
import { I18N } from "aurelia-i18n";
import { ValidationControllerFactory, ValidationRules, Validator,validateTrigger  } from 'aurelia-validation';


interface todo{
  name:string;
}
@inject(I18N,ValidationControllerFactory)
export class App {
  name:string;
  todo:todo;
  controller: any;
    constructor(private i18n:I18N, controllerFactory: ValidationControllerFactory){
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
   
  test_validate()
  {

           
  }
  public message = 'Hello World!';
}
