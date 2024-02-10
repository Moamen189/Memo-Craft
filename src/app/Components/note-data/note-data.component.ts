import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { NoteService } from 'src/app/Core/Services/note.service';

@Component({
  selector: 'app-note-data',
  templateUrl: './note-data.component.html',
  styleUrls: ['./note-data.component.scss']
})
export class NoteDataComponent implements OnInit {

  constructor(private _fb:FormBuilder , private _note:NoteService) { }
  dataForm!:FormGroup
  userData:any

  ngOnInit(): void {
    this.createForm()
    this.userData = jwtDecode(localStorage.getItem("_noteotken")!)
  }

  createForm():void{
    this.dataForm = this._fb.group({
    title:['' , [Validators.required]],
    desc:['',[Validators.required]],
    token:localStorage.getItem("_noteotken"),
    })
  }

  sendData():void{
    if(this.dataForm.valid){

      console.log(this.dataForm.value)
      this.addNote()
    }
  }


  addNote():void{
    const data = {
        ...this.dataForm.value,
        citizenID:this.userData._id
    }
     // this._note.addNote(this.dataForm.value)
  }

}
