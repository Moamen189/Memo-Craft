import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private _Form:FormBuilder , private _auth:AuthService  , private _Route:Router , private _toastr:ToastrService) { }

  RegisterForm!:FormGroup

  CreateForm():void{
      this.RegisterForm = this._Form.group({
          first_name:['' , [Validators.required]],
          last_name:['' , [Validators.required]],
          email:['', [Validators.required , Validators.email , Validators.pattern(/(com | net)$/)]],
          password:['', [Validators.required]],
          age:['', [Validators.required]],
      })
  }
register(formData:FormGroup):void{
  if(formData.valid){
      this._auth.register(formData).subscribe({
        next:response =>{
          if(response.message === "success"){
              this._Route.navigate(['/login'])
          }else {
              this._toastr.error("Registraion Failed")
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
