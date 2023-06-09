import { Component,OnInit } from '@angular/core';
import{Cab} from '../cab';
import { CabService } from '../cab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

userRecords:Cab={
  id:0,
  Name:'',
  Location:'',
  Battery_Details: {
    Vehicle_Type: '',
    Battery_Percent: '',
    Battery_id: '',
  },
  order_details:'',
  Rating:''

}

ngOnInit(): void {
  throw new Error('Method not implemented.');
}
constructor(private cs:CabService, private router:Router){}
addRecords(){
  this.cs.create(this.userRecords).subscribe(()=>{
    this.router.navigate(["/"])
  })
}
}
