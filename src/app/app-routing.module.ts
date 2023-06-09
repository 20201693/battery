import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditCabComponent } from './edit-cab/edit-cab.component';

const routes: Routes = [
{
  path:'',
  component:UserMgmtComponent
},
{
  path:'add-user',
  component:AddUserComponent
},
{
  path:'edit-user/:id',
  component:EditCabComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
