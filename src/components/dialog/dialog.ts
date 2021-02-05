import {DialogController} from 'aurelia-dialog';
import { autoinject, inject } from 'aurelia-framework';
 
@autoinject
 
export class Dialog {    
    title?: string;
    message?: string;
    action?: (args?: any) => {};
    action_cancel?: (args?:any)=>{};
    cancelebtn:boolean;

    constructor(private dialogController : DialogController) {
        dialogController.settings.centerHorizontalOnly = true;
    }
 
    activate(model : any) {
        this.message = model.message;
        this.title = model.title;
        this.action = model.action;
        this.action_cancel=model.action_cancel;
        this.cancelebtn=model.cancelebtn;
     }
 
     ok() : void {
         //this.action();
        this.dialogController.ok();
     }
     cancel():void{
        //this.action_cancel();
       this.dialogController.cancel();
     }

}
