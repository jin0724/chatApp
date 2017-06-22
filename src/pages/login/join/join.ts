import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage }  from '../login';
import * as $ from 'jquery';

@Component({
  selector: 'page-join',
  templateUrl: 'join.html'
})
export class JoinPage {
  public buffer;
  constructor(public navCtrl: NavController) {

  }

  doCheckId(usrId: string){
    /* 아이디 유효성 검사 필요 */
    var userid = $('#userid > input').val();
    /* 중복인지 아닌지 검사 필요 */
    alert("와하");


    /* $("#btn_idcheck").attr("disabled","disabled"); */
    this.buffer = userid;
  }

  validation(){
    var userid = $('#userid > input').val();
    var username = $('#username > input').val();
    var passwd1 = $('#passwd1 > input').val();
    var passwd2 = $('#passwd2 > input').val();

    if(userid==""){
      alert("아이디를 정확이 입력하세요.");
      return false;
    }
    if(userid != this.buffer){
      alert("중복확인 버튼을 클릭 바랍니다.")
      return false;
    }
    if(username==""){
      alert("이름을 정확이 입력하세요.");
      return false;
    }
    if(passwd1 == "" || passwd2 == "" ){
      alert("비밀번호를 입력하세요.")
      return false;
    }
    if(passwd1 != passwd2){
      alert("비밀번호가 동일하지 않습니다.")
      return false;
    }


    // 마지막에 확인

  }

  doJoin(){
    var val = this.validation();

    /*가입 관련 처리 실행*/

    if(val){
      alert("가입?");

      /*이런저런 가입 절차 진행 후*/

      this.navCtrl.setRoot(LoginPage);
    }

  }
}
