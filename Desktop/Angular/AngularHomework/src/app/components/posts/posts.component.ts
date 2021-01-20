import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  singlePost: Post;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadAllPosts();
  }

  private loadAllPosts(){
    this.postService.getAllPosts()
      .subscribe((value: Post[]) => {
        this.posts = value
      })
  }

  getBubble(post: Post){
    this.singlePost = post;
  }

}
