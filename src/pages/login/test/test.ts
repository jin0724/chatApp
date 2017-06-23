import { Component,NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as io from 'socket.io-client';

@Component({
  selector : 'page-abot',
  templateUrl: 'test.html'
})
export class TestPage {

  socket: any;
  chats: string[];
  chatinp: string;

  constructor(public navCtrl: NavController, public zone: NgZone) {
    this.chats = [];
    this.chatinp = '';
    this.socket = io('http://192.168.0.156:3000');
    this.socket.on('message', (msg) => {
      this.zone.run(() => {
        this.chats.push(msg);
      });
    });
  }
  send(msg) {
    if (msg.trim() != '') {
      this.socket.emit('message', msg);
    }
    this.chatinp = '';
  }
}
