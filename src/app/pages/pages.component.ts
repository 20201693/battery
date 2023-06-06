import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MatSort } from '@angular/material/sort';
import { Cab } from '../datatype';
import { MatTable } from '@angular/material/table';
import { JsonService } from '../json.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{
dataSourse:Cab[]=[];
  displayedColumns: string[] = ['id', 'Name', 'Location','Battery_Details','order_details','Rating'];
 
  constructor(private cab:JsonService){}
  
  ngOnInit(): void {
    this.getAllCabs()
   }

getAllCabs(){
this.cab.getAll().subscribe((data:Cab[])=>{
this.dataSourse=data
 console.log(data)
})
}
getRatingStars(Rating: string): string[] {
  const starsCount = parseInt(Rating, 10);
  return Array(starsCount).fill('');
}
}


