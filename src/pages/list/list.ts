import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat'


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  users : string[];

  initializeUser() {
    this.users = [
      'kim',
      'lee',
      'park',
      'choi',
      'moon',
      'u'
    ];
  }

  constructor(public navCtrl: NavController) {
    this.initializeUser();
  }

  goChat(usrId: string){
    this.navCtrl.push(ChatPage,
      {
        usrId : usrId
      });
  }

}
