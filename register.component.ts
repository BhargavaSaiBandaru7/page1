import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { User } from '../user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  form: FormGroup;
  constructor(private dataService:DataService ,public fb:FormBuilder) { 
    this.form=this.fb.group({
      username:new FormControl(),
      userage:new FormControl(),
      usermail:new FormControl(),
      userpn:new FormControl(),
      usercomments:new FormControl()
    })
  }




  submit()
  {

    const user: User={
      'username':this.form.value.username,
      'userage':this.form.value.userage,
      'usermail':this.form.value.usermail,
      'userpn':this.form.value.userpn,
      'usercomments':this.form.value.usercomments}
    this.dataService.saveUser(user).subscribe(
      (res)=>{
        console.log(res)
      }
    )
    
    }
  }


