import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CabService } from '../cab.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent  implements OnInit{
constructor(public dialogRef: MatDialogRef<DeleteUserComponent>,
  private cs:CabService, @Inject (MAT_DIALOG_DATA) public data:any){

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  confirmDelete(){
this.cs.delete(this.data.id).subscribe(()=>{
  this.dialogRef.close(this.data.id)
})
}
}
