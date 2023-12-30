import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menueName:string = 'Login';


  constructor(private _Router:Router) {

      this._Router.events.subscribe({
        next:(response) => {
          if(response instanceof NavigationStart){
              this.menueName = response.url.replace('/' , '');
          }
        }
      })
   }

  ngOnInit(): void {
  }

}
