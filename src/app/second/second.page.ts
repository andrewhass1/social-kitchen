import { Component, OnInit} from '@angular/core';
import { NavController, ToastController, AlertController} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subscriber } from 'rxjs';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  navigate: { title: string; url: string; }[];
  userDoc: any;
  data: any;
  crazy: any;
  title: any;
  total1: any;
  name: any;


  constructor(public navCtrl: NavController,public fAuth: AngularFireAuth, public db: AngularFirestore, private storage: Storage, public toastController: ToastController, public alertController: AlertController) {
  }

save(row, tim1){
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
            this.db.collection<any>( "food", ref => ref.where ('status' , '==' ,"social").where("time",'>',tim1)).valueChanges ().subscribe((data)=>{
              if(Array.isArray(data) && data.length){
                this.data = data;
                console.log("true")
              }
              else{
                this.name = name;
                console.log("false")
              }
              console.log(this.data)
              this.storage.set("time", tim1);
          }); 
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
    message: 'A new recipe has been added!',
    duration: 2000
  });
  toast.present();
}

delete(name){
  this.db.collection<any>( "food", ref => ref.where ('status' , '==' ,"social").where ('time' , '<' ,name).limit(1)).valueChanges ().subscribe((data)=>{
    if(Array.isArray(data) && data.length){
      this.data = data;
      console.log("true")
    }
    else{
      this.deleteSong()
    }
    console.log(name)
    this.storage.set('time', name)
  });
}

async deleteSong() {
  const alert = await this.alertController.create({
    message: 'Want more recipes? Check out our saved creations!',
    buttons: [
      {
        text: 'Okay',
        handler: () => {
          console.log(name)
        },
      },
    ],
  });

  await alert.present();
}

doRefresh(event) {
  this.storage.get('time').then((time1) => {
    console.log(time1)
    if(time1 == null){
      this.db.collection<any>( "food", ref => ref.where ('status' , '==' ,"social").orderBy("time","desc").limit(1)).valueChanges ().subscribe((data)=>{
        this.data = data;
      })

    }
    else{
      console.log("name")
      this.db.collection<any>( "food", ref => ref.where ('status' , '==' ,"social").orderBy("time","desc").limit(1)).valueChanges ().subscribe((data)=>{
        this.data = data;
        this.storage.set('time', time1)
      });
    }

  });

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}

  ngOnInit() { 
    this.storage.get('time').then((time1) => {
      console.log(time1)
      if(time1 == null){
        this.db.collection<any>( "food", ref => ref.where ('status' , '==' ,"social").orderBy("time","desc").limit(1)).valueChanges ().subscribe((data)=>{
          this.data = data;
        })
  
      }
      else{
        console.log("name")
        this.db.collection<any>( "food", ref => ref.where ('status' , '==' ,"social").orderBy("time","desc").limit(1)).valueChanges ().subscribe((data)=>{
          this.data = data;
        });
      }
  
    }); 
  }
}
