import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  getALLClient(){
    return this.http.get('http://localhost:9090/Customer/all');
  }
  Delete(id:string){
    if(confirm("voulez vous supprimez ce Client?"))
    return this.http.delete('http://localhost:9090/Customer/cst/'+ id);
  }
  SaveClient(Customer:any){
    return this.http.post<any>('http://localhost:9090/Customer/add', Customer);
  }
}
