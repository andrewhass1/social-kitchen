import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  navigate: { title: string; url: string; }[];
  userDoc: any;
  data: any;
  crazy: any;


  constructor(public navCtrl: NavController,public fAuth: AngularFireAuth, public db: AngularFirestore, private storage: Storage) {}
  getPostEntry (){
    this.storage.get('email').then((val) => {
      return val;
    });
  } 

  getAllPosts (): Observable<any> {
    return this.db.collection<any>( "food" ).valueChanges ();
  }

  ngOnInit() {
    this.db.collection( "food" , ref => ref.where ( 'status' , '==' ,"final").limit(7)).valueChanges ().subscribe((data)=>{
        this.data = data;
        console.log(data);
    });
} 
  
}
