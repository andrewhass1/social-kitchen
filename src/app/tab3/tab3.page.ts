import { Component, OnInit} from '@angular/core';
import { NavController, ToastController, AlertController} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subscriber } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit  {
  data: unknown[];
  name: any;
  name1: any;
  contol: number;
  data1: unknown[];

  constructor(public navCtrl: NavController,public fAuth: AngularFireAuth, public db: AngularFirestore, private storage: Storage, public toastController: ToastController, public alertController: AlertController) {}

  logout() {
    this.fAuth.auth.signOut().then(() => {
      this.storage.clear()
      this.navCtrl.navigateRoot(['/login']);
    })
  }

  editName(name){
    this.contol = 2
    this.name = name
    return name
  }

  submit(){
    let name1 = this.name1
    this.deleteSong(name1)
    console.log(name1)
  }

  async deleteSong(name1) {
    if(name1.length > 0){
    const alert = await this.alertController.create({
      message: 'Are you sure you want to update your username?',
      buttons: [
        { 
          text: 'Cancel',
          role: 'cancel',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            console.log(name)
            this.storage.get('email').then((val) => {
              this.db.collection('/users').doc("6VEsOqLH1HNuYsnkEc1x").update({
                username: name1
              }).catch(function(error) {
                console.error("Error removing document: ", error);
            })
            });
            this.presentToast()
          },
        },
      ],
    });
  
    await alert.present();
  }
  }

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Username has been updated!',
    duration: 2000
  });
  toast.present();
  this.name2()
}
name2(){
      this.storage.get('email').then((val) => {
      this.db.collection( "users" , ref => ref.where ( 'email' , '==' ,val)).valueChanges ().subscribe((data)=>{
          this.data = data;
          this.contol = 1
          console.log(data);
      });
  })
}

  ngOnInit() {
    this.contol = 1
    this.storage.get('email').then((val) => {
      this.db.collection( "users" , ref => ref.where ( 'email' , '==' ,val)).valueChanges ().subscribe((data)=>{
          this.data = data;
          console.log(data);
      });
  })

  this.storage.get('email').then((val) => {
    this.db.collection( "food" , ref => ref.where ( 'email' , '==' ,val)).valueChanges ().subscribe((data1)=>{
        this.data1 = data1;
        console.log(data1);
    });
})
}
}
