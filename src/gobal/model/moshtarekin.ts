import { ValidationControllerFactory, ValidationRules, Validator,validateTrigger  } from 'aurelia-validation';
import { inject } from 'aurelia-dependency-injection';

@inject(ValidationControllerFactory)
export class moshtarekin{
    samabid:number;
    firstName:string;
    lastName:string;
    fatherName:string;
    nationalCode:string;
    shshenasnameh:number;
    tarikhtavalod:string;
    address:string;
    postalCode:string;
    mobilePhoneNumber:string;
    homePhone:string;
    email:string;
    password:string;
    rpassword:string;
    chanelName:string;
    seghli:number;
    pompazh:number;
    controller: any;
    constructor( controllerFactory: ValidationControllerFactory){
      this.controller = controllerFactory.createForCurrentScope();
      this.controller.validateTrigger = validateTrigger.changeOrBlur;
      ValidationRules
            .ensure('samabid')
            .required()
            .minLength(5)
            .maxLength(15)
            .ensure('firstName')
            .required()
            .minLength(2)
            .maxLength(15)
            .ensure('lastName')
            .required()
            .minLength(2)
            .maxLength(20)
            .ensure('fatherName')
            .required()
            .minLength(2)
            .maxLength(15)
            .ensure('nationalCode')
            .required()
            .minLength(10)
            .maxLength(10)
            .ensure('shshenasnameh')
            .required()
            .minLength(1)
            .maxLength(10)
            .ensure('tarikhtavalod')
            .required()
            .minLength(8)
            .maxLength(10)
            .ensure('address')
            .required()
            .minLength(3)
            .maxLength(100)
            .ensure('postalCode')
            .required()
            .minLength(10)
            .maxLength(10)
            .ensure('postalCode')
            .required()
            .minLength(10)
            .maxLength(10)
            .ensure('mobilePhoneNumber')
            .required()
            .minLength(11)
            .maxLength(11)
            .ensure('homePhone')
            .minLength(8)
            .maxLength(11)
            .ensure('email')
            .email()
            .ensure('password')
            .required()
            .minLength(4)
            .maxLength(20)
            .ensure('rpassword')
            .required()
            .minLength(4)
            .maxLength(20)
            .on(this);

  }
  attached(): void {
  }
}
