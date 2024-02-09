import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private _Form:FormBuilder , private _auth:AuthService) { }

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
        next:response => console.log(response)
      })
  }

}
hide = true;



  ngOnInit(): void {
    this.CreateForm()
  }

}
