import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  images: any = [];

  constructor(public navCtrl: NavController) {
    this.images = [
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/200x200',
      'http://placehold.it/175x175',
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/200x200',
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/200x200',
      'http://placehold.it/175x175',
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/200x200',
      'http://placehold.it/175x175',
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/200x200',
      'http://placehold.it/175x175',
    ];
  }

}
