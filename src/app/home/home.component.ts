import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor(private db: AngularFireDatabase,private rooter: Router){}

  addWiki(data: NgForm){
    this.db.list("/post").push(data.value);
    this.rooter.navigate(['/card'])
    alert("บันทึกเสร็จสิ้น")
  }
}
