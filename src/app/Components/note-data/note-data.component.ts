import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/Core/Services/note.service';

@Component({
  selector: 'app-note-data',
  templateUrl: './note-data.component.html',
  styleUrls: ['./note-data.component.scss']
})
export class NoteDataComponent implements OnInit {

  constructor(private _fb:FormBuilder , private _note:NoteService) { }
  dataForm!:FormGroup
  ngOnInit(): void {
    this.createForm()
  }

  createForm():void{
    this.dataForm = this._fb.group({
    title:['' , [Validators.required]],
    desc:['',[Validators.required]],
    token:localStorage.getItem("_noteotken"),
    })
  }

  sendData(formData:FormGroup):void{
    if(formData.valid){

      console.log(formData)
    }
  }

}
