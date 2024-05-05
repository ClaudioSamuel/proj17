import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
      NgIf, 
      FormsModule,
      ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {
  form!:FormGroup;
  f: any;

  constructor(public postService:PostService, private router:Router){

  }

  ngOnInit():void{
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body:new FormControl('', Validators.required)
    })
  }

  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((res:any)=>{
      alert("POst created successFull");
      this.router.navigateByUrl('post/index');
    })

  }

}
