import { apiservice } from 'gobal/services/api-service';
import { moshtarekin } from './../../gobal/model/moshtarekin';
import { newmoshtarek } from '../../components/dialog/newmoshtarek';
import { inject } from 'aurelia-dependency-injection';
import { DialogService } from "aurelia-dialog";
import { ValidationControllerFactory, ValidationRules, Validator,validateTrigger  } from 'aurelia-validation';
import * as $ from 'jquery';
@inject(DialogService,ValidationControllerFactory,moshtarekin,apiservice)
export class moshtarek{
    
    permitnext:boolean=false;
    controller: any;
    submitstatustitle:string="در حال پردازش...";
    submitstatusdes:string;
    submitstatus:boolean=false;
    selectedFiles:string[];
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
      archivefileaddress:3,
    }
   
  this.api.post('Users/CreatUser',body)
  .then(Response=>{
    if(Response.status==201){
      this.submitstatustitle="موفقیت";
      this.submitstatusdes="مشترک با موفقیت ثبت شد";
      this.submitstatus=true;
      alert('ok')
    }
    else{
      alert('notok'+Response.status+Response.body);
      this.submitstatustitle="عدم موفقیت";
      this.submitstatusdes="در ثبت داده مشکلی بوجود آمده است";
      this.submitstatus=false;
    }

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
      id:1,
      cartemeli:"abdolahi2.jpg",
      //shenasnameh:"2-1.jpg"

    }
    return this.api.upload('Upload', params, this.selectedFiles[0]).then(() => alert('ok'));
  }


}
