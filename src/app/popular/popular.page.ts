import { Component, OnInit} from '@angular/core';
import { NavController, ToastController} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.page.html',
  styleUrls: ['./popular.page.scss'],
})
export class PopularPage implements OnInit {


  navigate: { title: string; url: string; }[];
  userDoc: any;
  data: any;
  crazy: any;
  title: any;
 

  constructor(public navCtrl: NavController,public fAuth: AngularFireAuth, public db: AngularFirestore, private storage: Storage, public toastController: ToastController) {
  }
  getPostEntry (){
    this.storage.get('email').then((val) => {
      return val;
    });
  }

save(row){
  this.storage.get('email').then((val) => {
  return new Promise<any>((resolve, reject) => {
    this.db.collection('/saves').add({
      Chef: row.Chef,
      Name: row.Name, 
      Ingredients: row.Ingredients,
      Instructions: row.Instructions,
      email: val,
      status: row.status,
      id: "a" 
    })
    .then(
      (res) => {
        resolve(res)
        this.db.collection('/saves').doc(res.id).update({
          id: res.id
        })
        .then(
          (docRef) => {
            this.presentToast()
          },
          err => reject(err)
        )
      },
      err => reject(err)
    )
  })
})
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'A new recipe has been added to your lunchbox!',
    duration: 2000
  });
  toast.present();
}

  ngOnInit() {
    this.db.collection<any>( "food", ref => ref.where ('status' , '==' ,"popular").limit(1)).valueChanges ().subscribe((data)=>{
        this.data = data;
        this.storage.set("Name", data);
        console.log(data[2]);
    }); 
} 
}
