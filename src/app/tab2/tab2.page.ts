import { Component, OnInit} from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  navigate: { title: string; url: string; }[];
  userDoc: any;
  data: any;
  data1: any;


  constructor(public loadingController: LoadingController, public navCtrl: NavController, public alertController: AlertController, public fAuth: AngularFireAuth, public db: AngularFirestore, private storage: Storage) {}
  getPostEntry (){
    this.storage.get('email').then((val) => {
      return val;
    });
  }

  delete (): Observable<any> {
    return this.db.collection<any>( "food" ).valueChanges ();
  }

  async deleteSong(name) {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to delete the recipe?',
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
            this.db.collection("saves").doc(name).delete().then(function() {
              console.log("Document successfully deleted!");
          }).catch(function(error) {
              console.error("Error removing document: ", error);
          });
          },
        },
      ],
    });
  
    await alert.present();
  }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 500
    }); 
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  ngOnInit() {
    this.presentLoading()
    this.storage.get('email').then((val) => {
    this.db.collection( "saves" , ref => ref.where ( 'email' , '==' ,val)).valueChanges ().subscribe((data)=>{
        this.data = data;
        console.log(data);
    });
})
  }
}