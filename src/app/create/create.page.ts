import { Component, OnInit} from '@angular/core';
import { NavController, ToastController, AlertController} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subscriber } from 'rxjs';
import { Storage } from '@ionic/storage';
import { firebase } from '@firebase/app';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  instructions: any;
  ingredients: any;
  chef: any;
title: any;
  constructor(public navCtrl: NavController,public fAuth: AngularFireAuth, public db: AngularFirestore, private storage: Storage, public toastController: ToastController, public alertController: AlertController) { }

  ngOnInit() {
  }
  submit(){
    var name = this.ingredients.replace(/\s/g, "");
    console.log(name)
    console.log(this.ingredients)
    function WordCount(str) { 
      return str.split(" ").length;
    }
    
    console.log(WordCount(this.ingredients));

    if(this.instructions.length > 0 && this.ingredients.length > 0 && this.chef.length > 0 && this.title.length > 0){
 
    this.storage.get('email').then((val) => {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/food').add({
        email: val,
        Chef: this.chef,
        Name: this.title,
        Ingredients: this.ingredients,
        Instructions: this.instructions,
        status: "pending"
      })
      .then(
        (res) => {
          resolve(res)
          this.navCtrl.navigateForward('/create1');

      
    })
  })
  })
  }
}
}
