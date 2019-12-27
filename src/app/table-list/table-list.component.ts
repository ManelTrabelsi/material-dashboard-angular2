import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'app/produit.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  listProduit : any[]


  constructor(private Produitservice:ProduitService) { }

  ngOnInit(){
    this.getAll();
   
  }
 
  getAll() {
    this.Produitservice.getallProduit().subscribe(
      data => {
        console.log(data)
        this.listProduit = data
      });
    }
delete (ProduitToDelete: any) {
        this.Produitservice.deleteProduit(ProduitToDelete.id).subscribe(
          data => {
            console.log (data);
            this.getAll();
          }
        )
        
  
    }

}
