import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../model/user.mode';
@Component({
  selector: 'app-the1',
  templateUrl: './the1.page.html',
  styleUrls: ['./the1.page.scss'],
})
export class The1Page implements OnInit {

  uid: String;
  user = {} as User;
  constructor(private afAuth:AngularFireAuth, private afStore: AngularFirestore) { }

  ngOnInit() {
    this.getInfo();
  }
  async getInfo() {
    //getting current user uid
    this.uid = (await this.afAuth.currentUser).uid;
    // console.log(this.uid);

    //getting current user's basic info
    this.afStore
      .doc("UserInfo/" + this.uid)
      .valueChanges()
      .subscribe((data) => {
        this.user.email=data['email'];
        this.user.password=data['password'];
      });
  }
}
