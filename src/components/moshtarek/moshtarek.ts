import { test } from './../../test';
import { apiservice } from 'gobal/services/api-service';
import { moshtarekin } from './../../gobal/model/moshtarekin';
import { newmoshtarek } from '../../components/dialog/newmoshtarek';
import { inject } from 'aurelia-dependency-injection';
import { DialogService } from "aurelia-dialog";
import { ValidationControllerFactory, ValidationRules, Validator,validateTrigger  } from 'aurelia-validation';
import * as $ from 'jquery';
import * as qs from 'querystringify';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(DialogService,ValidationControllerFactory,moshtarekin,apiservice)
export class moshtarek{
    
    permitnext:boolean=false;
    controller: any;
    submitstatustitle:string="در حال پردازش...";
    submitstatusdes:string="مشترک با موفقیت ثبت شد";
    submitstatus:boolean=false;
    selectedcartemeli=[];
    selectedbackcartemeli=[];
    selectedshenasnameh=[];
    idsubmited:number;
    selectedarchive:number;
    selectedtabagheh:number;
    dataarchive:any;
    datatabagheh:any;
    response:any;
    constructor(private dialogservice:DialogService,private controllerFactory: ValidationControllerFactory,private moshtarekin:moshtarekin,private api:apiservice){
      this.controller = controllerFactory.createForCurrentScope();
    }

    openDialog() : void {
        this.dialogservice.open( {viewModel: newmoshtarek,
            model: { action: this.action, action_cancel:this.action_cancel} }).whenClosed(response => {
          console.log(response);
             if (!response.wasCancelled) {
             

             } 
          
       });
      }

      action() : void {
    
        console.log('test');
      }
      action_cancel():void{
       
      }

      test()
      {
        this.submitstatustitle="موفقیت";
        this.submitstatusdes="مشترک با موفقیت ثبت شد";
        this.submitstatus=true;
      }
      
      attached()
      {
        this.createtable();
      }
      createtable()
      {
        $("#example1").DataTable({
            "language": {
                "paginate": {
                    "next": "بعدی",
                    "previous": "قبلی"
                },
                "search": "جستجو ",
                "Show": "نمایش",
                "emptyTable": "هیچ داده‌ای در جدول وجود ندارد",
                "info": "نمایش _START_ تا _END_ از _TOTAL_ ردیف",
                "infoEmpty": "نمایش 0 تا 0 از 0 ردیف",
                "infoFiltered": "(فیلتر شده از _MAX_ ردیف)",
                "infoThousands": ",",
            },
            "info": false,
            //"lengthChange": false,
            //"dom": '<"#example1_filter.dataTables_filter">frtip'
            
        });
        $("#example1_wrapper #example1_length").html('<button type="button" data-toggle="modal" data-target="#myModal" class="btn btn-info waves-effect waves-light" >افزودن مشترک</button>');
      }
      get canNext1(){
        return this.moshtarekin.samabid && this.moshtarekin.password && this.moshtarekin.rpassword;
      }
      get canNext2(){
        return this.moshtarekin.address && this.moshtarekin.email && this.moshtarekin.fatherName && this.moshtarekin.firstName &&
               this.moshtarekin.homePhone && this.moshtarekin.lastName && this.moshtarekin.mobilePhoneNumber && this.moshtarekin.nationalCode &&
               this.moshtarekin.postalCode && this.moshtarekin.shshenasnameh && this.moshtarekin.tarikhtavalod;
      }

      submitnewmostarek()
      {
      let body={
      id: 0,
      samabCode:this.moshtarekin.samabid,
      firstName:this.moshtarekin.firstName,
      lastName:this.moshtarekin.lastName,
      fatherName:this.moshtarekin.fatherName,
      nationalCode:this.moshtarekin.nationalCode,
      shomarehSh:this.moshtarekin.shshenasnameh,
      tarikhTavalod:this.moshtarekin.tarikhtavalod,
      address:this.moshtarekin.address,
      postalCode:this.moshtarekin.postalCode,
      mobilePhoneNumber:this.moshtarekin.mobilePhoneNumber,
      homePhone:this.moshtarekin.homePhone,
      email:this.moshtarekin.email,
      password:this.moshtarekin.password,
      bayganiCode:"1236547",
      archivefileaddress:this.selectedtabagheh,
    }
    let body1={
      "id":0,"samabCode":"212312312312","firstName":"ایمان","lastName":"جوادی","fatherName":"عبدالحسین","nationalCode":"1920093206","shomarehSh":"1920093206","tarikhTavalod":"1369/03/30","address":"نتشس ممشس یمشس مشسیشم","postalCode":"6483111111","mobilePhoneNumber":"09165247254","homePhone":"06142643543","email":"imanasdd@gmail.com","password":"1234","bayganiCode":"1236547","archivefileaddress":this.selectedtabagheh,"kanalName": "string",
      "masahatSeghli": "1230",
      "masahatPomPazg": "120"
    }
   
  this.api.post('Users/CreatUser',body1)
  .then(Response=>Response.json())
  .then(data=>
    {
      this.idsubmited=data.id;
      alert(this.idsubmited);
      this.getarchive();
      //this.gettabagheh(1);
      /*
      if(this.response.status==201)
      {
        alert('ok');
        this.submitstatustitle="موفقیت";
        this.submitstatusdes="مشترک با موفقیت ثبت شد";
        this.submitstatus=true;
      }
      else
      {
        this.submitstatustitle="عدم موفقیت";
          this.submitstatusdes="در ثبت داده مشکلی بوجود آمده است";
          this.submitstatus=false;
          alert('notok'+this.response.status);
      }
      */
    })
  .catch((error)=>{
    alert(error)
    this.submitstatustitle="ناموفق";
    this.submitstatusdes="در سیستم مشکلی بوجود آمده است";
    this.submitstatus=false;
   
  })
  }
  doUpload()
  {
    
    let params={
      id:this.idsubmited,
      cartemeli:this.selectedcartemeli[0].name,
      backcartemeli:this.selectedbackcartemeli[0].name,
      shenasnameh:this.selectedshenasnameh[0].name

    }
    return this.api.upload('Upload', params, this.selectedcartemeli,this.selectedbackcartemeli,this.selectedshenasnameh)
    .then(response=>{
      if(response.status==200)
      {
        alert(this.idsubmited)

      }
    })
    .catch(error=>{
      alert('notok');
    })
  }
  getarchive()
  {

    this.api.getarchive('ArchiveFiles')
    .then(Response=> Response.json())
    .then(data=> 
      this.dataarchive=data
      )
    .catch(error=>alert(error))
  }
  gettabagheh(selectedarchive:number)
  {
    this.api.gettabagheh('ArchiveFiles',selectedarchive)
    .then(Response=> Response.json())
    .then(data=> {
      this.datatabagheh=data;
    });
  }
test1()
{
  alert(this.selectedtabagheh)
}

}
