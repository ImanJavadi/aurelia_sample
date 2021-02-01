import { inject } from 'aurelia-dependency-injection';
import { I18N } from "aurelia-i18n";

@inject(I18N)
export class App {
  constructor(private i18n:I18N){
    this.i18n.setLocale('en');
  }

  public message = 'Hello World!';
}
