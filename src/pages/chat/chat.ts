import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl:'chat.html'
})
export class ChatPage {

  public user;
  public variable;

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.user = navParams.get("user");
    this.variable = false;

  }
}
