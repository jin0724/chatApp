import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage }  from '../tabs/tabs';
import { JoinPage }  from './join/join';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  doLogin(){
    //여기에서 이런저런 로그인 여부 및 알럿 출력 필요
    alert("로그인");
    this.navCtrl.setRoot(TabsPage);
  }
  doJoin(){
    alert("회원가입");
    this.navCtrl.push(JoinPage);
  }
}
