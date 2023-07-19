import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavServiceService {

  constructor() { }
  private isSidenavOpen = false;

  getIsSidenavOpen(): boolean {
    return this.isSidenavOpen;
  }

  setIsSidenavOpen(isOpen: boolean): void {
    this.isSidenavOpen = isOpen;
  }
}
