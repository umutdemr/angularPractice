import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import {MatCardModule} from '@angular/material/card';
import { InfoItemComponent } from '../info-item/info-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {SearchComponent} from "../search/search.component";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        InfoComponent,
        InfoItemComponent,
        InfoModalComponent,
        SearchComponent
    ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule

  ]
})
export class InfoModule { }
