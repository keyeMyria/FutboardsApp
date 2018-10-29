import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public nativeAudio: NativeAudio) {
  this.nativeAudio.preloadComplex('somPraFora','../../assets/sounds/somFalta.mp3',1,1,0);
   
  this.nativeAudio.preloadSimple('somFalta','../../assets/sounds/somFalta.mp3'); 
  }
   tocarSom = () => {
   this.nativeAudio.play('somPraFora').then(()=>{console.log('tocando');})
   }
   tocarSomTorcida = () => {
    this.nativeAudio.preloadComplex('somTorcida','/assets/sounds/somTorcida.mp3',1,0,0);
    this.nativeAudio.play('somTorcida').then(()=>{console.log('tocando');})
    }
   tocarSomAlter = () => {
    this.nativeAudio.play('somFalta').then(()=>{console.log('tocando');})
    }
   tocarSomParametro = (caminho) => {
    this.nativeAudio.preloadComplex('somPraFora',caminho,1,1,0); 
    this.nativeAudio.play('somPraFora');
    }
    colocaLog = () =>{
      console.log('teste');
    }
}