import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(form) {
    this.loading.present();

    // this.auth.loginWithEmail(this.user).then(res => {
    //   // Successfully logged in
    //   // now, dismiss the Loading and SetRoot to specific page..
    //   this.loading.dismiss().then(() => {
    //     console.log('Login Success', res);
    //     this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
    //   });
    // });
  }


}
