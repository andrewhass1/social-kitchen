import { Component, OnInit} from '@angular/core';
import { NavController, ToastController} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subscriber } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-recipe1',
  templateUrl: './recipe1.page.html',
  styleUrls: ['./recipe1.page.scss'],
})
export class Recipe1Page implements OnInit {

  constructor(public navCtrl: NavController,public fAuth: AngularFireAuth, public db: AngularFirestore, private storage: Storage, public toastController: ToastController) { }
  public goalList: any[];
  public loadedGoalList: any[];
  ngOnInit() {
    this.db.collection<any>( "food", ref => ref.where ('status' , '==' ,"final").orderBy("time","desc")).valueChanges ().subscribe((data)=>{
      this.goalList = data;
      this.loadedGoalList = data;
    });
  }
  

  
  initializeItems(): void {
    this.goalList = this.loadedGoalList;
  }

  filterList(evt) {
    this.initializeItems();
  
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }
  
    this.goalList = this.goalList.filter(currentGoal => {
      if (currentGoal.Name && searchTerm) {
        if (currentGoal.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }
}
