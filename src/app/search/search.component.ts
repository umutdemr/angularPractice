import { Component } from '@angular/core';
import {InfoServicService} from "../services/info-servic.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {

  constructor(
    private InfoServicService:InfoServicService
      ) { }


  search(searchText:string):void{
    searchText= searchText.toLocaleLowerCase();
    this.InfoServicService.filteredTexts = this.InfoServicService.infos.filter((info)=>{
      return info.title.toLocaleLowerCase().indexOf(searchText)> -1 || (info.name && info.name.toLocaleLowerCase().indexOf(searchText)>-1) ;

    });


  }

}
