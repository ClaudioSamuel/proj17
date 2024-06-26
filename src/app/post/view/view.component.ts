import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    NgIf, 
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})

export class ViewComponent {
 
   id!:number;
   post!:Post;

   constructor(public postService:PostService,private router:Router,private route:ActivatedRoute){}

    ngOnInit():void{
      this.id = this.route.snapshot.params['postId'];
      this.postService.find(this.id).subscribe((data:Post) => {
        this.post = data;
      })
    }
  }



