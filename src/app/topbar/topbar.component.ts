import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  
  }

  pate1(){
    this.router.navigate(['/card'])
  }
  pate2(){
    this.router.navigate(['/login'])
  }
  pate3(){
    this.router.navigate(['/register'])
  }
  pate4(){
    this.router.navigate(['/users'])
  }

}
