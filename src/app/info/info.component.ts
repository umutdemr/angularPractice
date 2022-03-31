import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import {InfoServicService} from "../services/info-servic.service";
import {Info} from "../models/info";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  user$= this.authService.currentUser$;


  constructor(
    public dialog: MatDialog,
    public InfoServicService:InfoServicService,
    private authService:AuthenticationService

  ) { }


  ngOnInit(): void {
    this.InfoServicService.getInfo();
  }

  openAddInfoModal():void{
     this.dialog.open(InfoModalComponent,{
      width:'400px'

    })

  }


}
