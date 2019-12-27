import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  constructor(private http:HttpClient) { }
  getallProduit(){
  return this.http.get<any>('http://localhost:9090/produits/all');}
  deleteProduit(id:string){
    if(confirm("voulez vous supprimer ce produit?"))
    return this.http.delete<any>('http://localhost:9090/produits/produits/'+id)
    .catch(this.errorHandle);
    
  }
  errorHandle(error:HttpErrorResponse){
    return Observable .throw(error.message||"Server Error");
    

  }
  saveProduit(Produit:any){
    return this.http.post('http://localhost:9090/produits/add',Produit);
  }
  
}
