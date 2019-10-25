import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends = [
    {
      name: 'Benz',
      pic: 'alisa.jpg',
      position: 'คนยโส บ่หยิ่งยโส',
    },
    {
      name: 'Ket',
      pic: 'ket.jpg',
      position: 'สีเกดกันเองบ่ต้องเกรงใจกัน',
    },
    {
      name: 'Pare',
      pic: 'pare.jpg',
      position: 'อุบลใจถึงพี่งได้',
    },
    {
      name: 'Pad',
      pic: 'pat.jpg',
      position: 'นาจะหลวย คอหวยที่แท้ทรู',
    },
    {
      name: 'Miw',
      pic: 'sirilak.jpg',
      position: 'สารคาม น้ำบ่ต้อง',
    },
    {
      name: 'King',
      pic: 'king.jpg',
      position: 'คิงรวย',
    }
  ];
  users: any

  constructor(private http: HttpClient) {
    this._getUsers()
  }

  _getUsers() {
    return this.http.post(
      'http://cs.sci.ubu.ac.th:7512/60114440181/user/_search',
      {
        query: {
          /*
          wildcard: {
            user: { value: '*an*' }
          }
          */
        }
      }
    ); /*.subscribe( data => {
      this.users = data['result']['hits']
      console.log(this.users)
    }, error => {});
    */
  }

  _saveUser(usr: string, passwd: string) {
    console.log(`user=${usr} passwd:${passwd}`);
    return this.http.post(
      'http://cs.sci.ubu.ac.th:7512/60114440181/user/_create',
      {
        user: usr,
        password: passwd,
      }
    );
  }

  getFriends() {
    return this.friends;
  }
}
