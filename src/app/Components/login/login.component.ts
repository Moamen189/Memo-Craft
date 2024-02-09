import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _Form:FormBuilder , private _auth:AuthService  , private _Route:Router , private _toastr:ToastrService) { }

  loginForm!:FormGroup

  CreateForm():void{
      this.loginForm = this._Form.group({
          email:['', [Validators.required , Validators.email , Validators.pattern(/(com | net)$/)]],
          password:['', [Validators.required]],

      })
  }
login(formData:FormGroup):void{
  if(formData.valid){
      this._auth.login(formData).subscribe({
        next:response =>{
          if(response.message === "success"){
              this._Route.navigate(['/home'])
          }else {
              this._toastr.error(response.message)
          }
        }
      })
  }

}
hide = true;



  ngOnInit(): void {
    this.CreateForm()
  }

}
