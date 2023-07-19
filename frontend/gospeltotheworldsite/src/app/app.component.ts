import { Component } from '@angular/core';
import { SidenavServiceService } from './components/sidenav-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gospeltotheworldsite';
  opened =this.sidenavService.getIsSidenavOpen()
  
    constructor(private sidenavService: SidenavServiceService) { }

  get isSidenavOpen(): boolean {
    return this.sidenavService.getIsSidenavOpen();
  }
}
