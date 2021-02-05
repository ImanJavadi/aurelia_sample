import { ValidationControllerFactory, ValidationRules, Validator,validateTrigger  } from 'aurelia-validation';
import { inject } from 'aurelia-dependency-injection';

@inject(ValidationControllerFactory)
export class Applicant{
    Name:string;
    Familyname:string;
    Address:string;
    CountryOfOrigin:string;
    EMailAdress:string;
    Age:string;
    Hired:string;
    controller: any;
    constructor( controllerFactory: ValidationControllerFactory){
      this.controller = controllerFactory.createForCurrentScope();
      this.controller.validateTrigger = validateTrigger.changeOrBlur;
      ValidationRules
            .ensure('Name')
            .required()
            .minLength(5)
            .ensure('Familyname')
            .required()
            .minLength(5)
            .ensure('Address')
            .required()
            .minLength(10)
            .ensure('CountryOfOrigin')
            .required()
            .ensure('EMailAdress')
            .required()
            .email()
            .ensure('Age')
            .required()
            .range(20,60)
            .ensure('Hired')
            .required()
            .on(this);

  }
  attached(): void {
  }
}
