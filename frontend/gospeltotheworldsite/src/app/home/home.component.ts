import { Component } from '@angular/core';

import { FetchfromserverService } from '../fetchfromserver.service';
import { SidenavServiceService } from '../components/sidenav-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 opened = false;
  constructor(private fetch:FetchfromserverService,
    private sidenavService: SidenavServiceService){
    this.getgridcategory()
  }
   sidenav(){
    this.opened = !this.opened
   }
  async openSidenav(): Promise<void> {
   await this.sidenavService.setIsSidenavOpen(true);
  }

  getgridcategory(){
    //make call to get the images and category from the backend {nodejs}
    this.fetch.gethomegridcategory().subscribe(res=>{

 })
  }

}
