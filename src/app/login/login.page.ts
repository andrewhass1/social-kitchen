import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
export class User {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage{

  public user:User = new User();
  email:string;
  error: any;

  constructor(public navCtrl: NavController,public fAuth: AngularFireAuth, public toastController: ToastController, private storage: Storage){
  }

  recover() {
    this.fAuth.auth.sendPasswordResetEmail(this.user.email)
      .then(data => {
        console.log(data);
        this.presentToast();
        this.navCtrl.navigateForward('/login');
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Password reset email sent',
      duration: 1000
    });
    toast.present();
  }
 
  async login() { 
    try { 
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        this.storage.set('email', this.user.email);
        console.log("Successfully logged in!");
        this.navCtrl.navigateForward('/tabs/tabs/tab1');
      }

    } catch (err) {
      console.error(err);
    }
  }

}
