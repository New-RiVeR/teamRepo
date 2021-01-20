import { Component, Input, OnInit, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() 
  post: Post;

  @Output()
  bubbleUp = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  getPostInfo(post: Post){
    this.bubbleUp.emit(post);
  }

}
