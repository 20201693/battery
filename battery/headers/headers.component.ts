import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit{
  @Output() toggleSidebarForMe: EventEmitter<any>=new EventEmitter();
  ngOnInit(): void {
  }

toggleSidebar(){
  this.toggleSidebarForMe.emit();
};
}


