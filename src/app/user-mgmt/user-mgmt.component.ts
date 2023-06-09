import { Component,OnInit } from '@angular/core';
import{Cab} from '../cab';

import { CabService } from '../cab.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-user-mgmt',
  templateUrl: './user-mgmt.component.html',
  styleUrls: ['./user-mgmt.component.css']
})


export class UserMgmtComponent implements OnInit {
  allCabs:Cab[]=[];
  displayedColumns: string[] = ['id', 'Name', 'Location','Battery_Details','order_details','Action','Rating'];
  
 
  constructor(private cab:CabService,public dialog: MatDialog){}
  
  ngOnInit(): void {
    this.getAllCabs()
   }

getAllCabs(){
this.cab.getAll().subscribe((data:Cab[])=>{
this.allCabs=data;
 console.log(data)
})
}
getRatingStars(Rating: string): string[] {
  const starsCount = parseInt(Rating, 10);
  return Array(starsCount).fill('');
}
openDeleteModel(id:number){
const deleteConfirm= this.dialog.open(DeleteUserComponent,{
   width:'250px',
   data:{id}
});
deleteConfirm.afterClosed().subscribe((result)=>{
  if(result){
    this.allCabs =this.allCabs.filter((_)=>
      _.id!==id
    );
  }
})
}

}








// getRatingStars(Rating: string): string[] {
//   const starsCount = parseInt(Rating, 5);
//   const filledStars = Array(starsCount).fill('');
//   const emptyStars = Array(5 - starsCount).fill('');
//   return filledStars.concat(emptyStars);
// }