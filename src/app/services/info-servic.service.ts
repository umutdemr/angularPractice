import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../models/info';

@Injectable({
  providedIn: 'root'
})
export class InfoServicService {

  infos!:Info[];
  filteredTexts!:Info[];

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private http:HttpClient
    ) { }

  getInfo():void{
     this.http.get<Info[]>(this.apiUrl+'/cards')
       .subscribe((res:Info[])=>{
         this.infos=  this.filteredTexts=res;;

       })
    //api  ınfo model
  }

 addInfo(Info:Info){
    return this.http.post(this.apiUrl+'/cards',Info);///apiye kayıtları post (gönderme) etme
 }
addCard(Info:Info):Observable<any>{
    return this.http.post(this.apiUrl+'/cards',Info);
}

  updateCard(Info:Info, cardId:number):Observable<any>{
    return this.http.put(this.apiUrl+'/cards/'+cardId,Info);
  }
  deleteCard(cardId:number):Observable<any>{
    return this.http.delete((this.apiUrl+'/cards/'+cardId))
  }

}
