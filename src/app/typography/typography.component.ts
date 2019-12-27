import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/client.service';
import { Customer } from 'Customer';


@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
 clienttosave:Customer=new Customer;
  allClient: any=[];

  constructor(private serviceClient:ClientService) { }

  ngOnInit() {
    
  }
  saveClient() {
    console.log(this.clienttosave);
    this.serviceClient.SaveClient(this.clienttosave).subscribe(
     data => {
       console.log(data);
       this.allClient = data;
     },
     err => {
       console.log (err);
     }
   );  
 }

}
