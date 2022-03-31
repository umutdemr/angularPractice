import { Component, Input, OnInit } from '@angular/core';
import { Info } from 'src/app/models/info';
import {MatDialog} from "@angular/material/dialog";
import {InfoModalComponent} from "../info-modal/info-modal.component";



@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss']
})
export class InfoItemComponent implements OnInit {


  @Input() infoItem!:Info;
  constructor(
    private  dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  openUpdateCardModule(ınfo:Info):void { ///kart formu açma ve guncelleme işlemi
    this.dialog.open(InfoModalComponent,{
      width:'400px',
      data:ınfo
    });


    }




}
