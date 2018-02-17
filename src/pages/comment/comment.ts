import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Comment} from "../../shared/comment";

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  commentForm: FormGroup;
  myComment: Comment;
  defaultRating = 3;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      author: ['', Validators.required],
      rating: this.defaultRating,
      comment: ['', Validators.required, Validators.minLength(4)]
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.commentForm.value);
    this.myComment = this.commentForm.value;

    var d = new Date();
    var n = d.toISOString();
    this.myComment.date = n;

    // console.log(this.myComment.rating);
    // console.log(this.myComment.author);
    // console.log(this.myComment.comment);
    // console.log(this.myComment.date);

    this.viewCtrl.dismiss(this.myComment);
  }

}
