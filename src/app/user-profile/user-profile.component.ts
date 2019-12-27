import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'app/produit.service';
import { Produit } from 'app/Produit';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

Produittosave:Produit=new Produit();
  allProduit: any=[];
  constructor(private Produitservice:ProduitService) { }

  ngOnInit() {
  }
  saveProduit() {
    console.log(this.Produittosave);
    this.Produitservice.saveProduit(this.Produittosave).subscribe(
     data => {
       console.log(data);
       this.allProduit = data;
     },
     err => {
       console.log (err);
     }
   );  
 }

}
