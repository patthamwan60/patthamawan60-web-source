import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {map} from 'rxjs/operators';
import { from } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: AngularFireList<any>;
  user: any[]
  constructor(private db: AngularFireDatabase, private rooter: Router) {
    this.users = db.list("/60114440181/user");
   }

  ngOnInit() {
    this.users.snapshotChanges().pipe(map(actions => {
    return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    })).subscribe(items => {
    this.user = items;

    });
  }

  login(user: string, password: string) {

    for(let u of this.user){
      if(user==u.value.user){
        console.log("ผ่านuser")
        if(password==u.value.password){
          this.rooter.navigate(['/card'])
          // console.log("ผ่านpassword");
          alert("login เสร็จสิ้น");
        }else{
          alert("กรอก urername หรือ password ผิด")
        }
      }
    }
  }
}
