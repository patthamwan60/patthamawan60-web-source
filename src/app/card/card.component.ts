import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  image = 'http://math.sci.ubu.ac.th/assets/staffimages/warawoot.jpg';
  name = 'John Doe';
  position = 'Programmer';

  constructor() {
    this.image = 'https://wichit2s.gitlab.io/assets/images/paul_logo_96x96.png';
  }

  ngOnInit() {
  }

}

