import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat'


@Component({
  selector: 'page-contact',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController) {

  }

  goChat(usrId: string){
    alert(usrId);
    this.navCtrl.push(ChatPage);
  }
}
