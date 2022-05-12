import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild (MatSidenav)
  sidenav!: MatSidenav;
  isExpanded=true;
  
  constructor(private observer: BreakpointObserver) {

  }

  ngOnInit(): void {
  }
   toggle() {
    //this.sidenav.toggle();
    this.isExpanded = !this.isExpanded;

  }
  
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          //this.sidenav.close();
          this.isExpanded=false

        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          this.isExpanded=true
        }
      });
  }

}
