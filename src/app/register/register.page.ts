import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

export class User {
  email: string;
  password: string;
  password2: string;
  name: any;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage{

  public user:User = new User();

  constructor(public navCtrl: NavController,public fAuth: AngularFireAuth, public db: AngularFirestore){
  }

  async register() {
    if(this.user.password == this.user.password2){
    try {
      var r = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {

          return new Promise<any>((resolve, reject) => {
            this.db.collection('/users').doc(this.user.email).set({
              username: this.user.name,
              email: this.user.email, 
              id: "a"
            })
            .then(
              (res) => {
                resolve(res)
                console.log("Successfully registered!");
                this.navCtrl.navigateForward('/tabs/tabs/tab1');
                  },
                  err => reject(err)
                )
                })
      }

    } catch (err) {
      console.error(err);
    }
  }
  }
 
}
 