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

  // I hope this is ok - same as from previous course/assignment for angular
  formErrors = {
    'author': '',
    'rating': '5',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required': 'Author Name is required.',
      'minlength': 'Author Name must be at least 2 characters long.',
      'maxlength': 'Author Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required': 'Comment is required.',
      'minlength': 'Comment must be at least 2 characters long.'
    },
    'rating': {
      'required': 'Rating is required.',
      'pattern': 'Rating must contain only numbers.'
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: [this.defaultRating, [Validators.required, Validators.pattern]],
      comment: ['', [Validators.required, Validators.minLength(4)]]
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  get author() { return this.commentForm.get('author');}
  get rating() { return this.commentForm.get('rating');}
  get comment() { return this.commentForm.get('comment');}

  onValueChanged(data?: any) {
    console.log('onValueChanged: ', data);
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
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
