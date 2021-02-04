import { inject } from 'aurelia-dependency-injection';
import { I18N } from "aurelia-i18n";
@inject(I18N)
export class header{

  constructor(private i18n:I18N){
    
  }
  chenge_locale(lan:string):void{
    this.i18n.setLocale(lan);
  }
}
