import { Component, OnInit } from '@angular/core';
import { Cab } from '../cab';
import { CabService } from '../cab.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-cab',
  templateUrl: './edit-cab.component.html',
  styleUrls: ['./edit-cab.component.css']
})
export class EditCabComponent implements OnInit {
  allCabs:Cab[]=[];
  displayedColumns: string[] = ['id', 'Name', 'Location','Battery_Details','order_details','Rating'];
 
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
    Rating:'' }


    constructor(private cs:CabService,private route:ActivatedRoute,private router:Router){}
 
    ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
let id =Number(params.get('id'))
this.getById(id);
    })


  }

  getById(id:number) {
this.cs.getbyId(id).subscribe((data)=>{
  this.userRecords=data;

})  
}
updateRecords(){
  this.cs.update(this.userRecords.id,this.userRecords).subscribe(()=>{
    this.router.navigate(['/'])
  })
}

}
