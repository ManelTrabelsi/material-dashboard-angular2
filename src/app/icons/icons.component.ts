import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/client.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  listCustomer: any=[];
  constructor(private serviceClient:ClientService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.serviceClient.getALLClient().subscribe(
      data => {
        console.log(data)
        this.listCustomer = data
      });
    }

delete (CustomertToDelete: any) {
        this.serviceClient.Delete(CustomertToDelete.id).subscribe(
          data => {
            console.log (data);
            this.getAll();
          }
        )
        
  
    }

  }


