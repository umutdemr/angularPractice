import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InfoServicService} from "../services/info-servic.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Info} from "../models/info";
interface Departman {
  value:string;
  viewValue:string;
}
@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  deps: Departman[] = [
    {value: 'dep-0', viewValue: 'Frontend Developer'},
    {value: 'dep-1', viewValue: 'Backend Developer'},
    {value: 'dep-2', viewValue: 'Full Stack Developer'},
  ];

  infoForm!: FormGroup;
  showSpinner: boolean=false;

  constructor(
    private dialogRef:MatDialogRef<InfoModalComponent>,
    private fb:FormBuilder,
    private InfoServicService:InfoServicService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data:Info
  ) { }

  ngOnInit(): void {
    this.infoForm=this.fb.group({
      name:[this.data?.name|| '',Validators.maxLength(50)],//name kısmı en fazla 50 karakter olmalı. ksısıtlama
      title:[this.data?.title||'', [Validators.required, Validators.maxLength(255)]],///boş geçilemeyeceği için kontrol atatdık
      phone:[this.data?.phone||'', [Validators.required, Validators.maxLength(20)]],
      email:[this.data?.email||'', [Validators.email, Validators.maxLength(50)]],///email kurallarına uygun kontrol
      address:[this.data?.address||'',[Validators.maxLength(255)]],
      departman:['']
    });
  }

  addInfo():void{ //Yeni Kullanıcı Ekleme Fonksiyonu
    this.showSpinner=true;
    this.InfoServicService.addCard(this.infoForm.value)
      .subscribe((res:any)=>{
        this.getSucces(res||'Bilgiler Başarıyla Eklendi.');
      });
  }

 updateCard():void{ //Bilgileri Güncelleme Fonksiyonu
  this.showSpinner=true;
  this.InfoServicService.updateCard(this.infoForm.value,this.data.id)
  .subscribe((res:any)=>{
    this.getSucces(res||'Bilgiler Başarıyla Güncellendi.');
  });
}

deleteCard():void{ //Bilgileri Silme Fonksiyonu
  this.showSpinner=true;
  this.InfoServicService.deleteCard(this.data.id)
      .subscribe((res:any)=>{
        this.getSucces(res||'Bilgiler Başarıyla Silindi.');
      });
}
getSucces(message:string):void{
  this._snackBar.open(message ||'Bilgiler Başarılı Şekilde Silindi','',{
    duration:4000,
    panelClass: ['mat-toolbar', 'mat-warn','text-center']
  });
  this.InfoServicService.getInfo();
  this.showSpinner=false;
  this.dialogRef.close();

}

}
