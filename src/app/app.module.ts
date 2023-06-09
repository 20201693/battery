import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AddUserComponent } from './add-user/add-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { EditCabComponent } from './edit-cab/edit-cab.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMgmtComponent,
    AddUserComponent,
    EditCabComponent,
    DeleteUserComponent
  ],
  imports: [
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
