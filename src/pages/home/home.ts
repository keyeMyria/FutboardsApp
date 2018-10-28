import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public nativeAudio: NativeAudio) {
  }
   tocarSom = () => {
   this.nativeAudio.preloadComplex('somPraFora',"../../assets/sounds/somFora.mp3",1,1,0); 
   this.nativeAudio.play('somPraFora');
   }
}