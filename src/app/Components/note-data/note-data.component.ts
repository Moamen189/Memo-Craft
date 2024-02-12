import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { jwtDecode } from 'jwt-decode';
import { NoteService } from 'src/app/Core/Services/note.service';

@Component({
  selector: 'app-note-data',
  templateUrl: './note-data.component.html',
  styleUrls: ['./note-data.component.scss']
})
export class NoteDataComponent implements OnInit {

  constructor(private _fb:FormBuilder , private _note:NoteService , private matDeialogRef:MatDialogRef<NoteDataComponent> , @Inject(MAT_DIALOG_DATA) public data:any) { }
  dataForm!:FormGroup
  userData:any

  ngOnInit(): void {
    this.createForm()
    this.userData = jwtDecode(localStorage.getItem("_noteotken")!)
  }

  createForm():void{
    this.dataForm = this._fb.group({
    title:[this.data ? this.data.title :'' , [Validators.required]],
    desc:[this.data ? this.data.desc :'',[Validators.required]],
    token:localStorage.getItem("_noteotken"),
    })
  }

  sendData():void{
    if(this.dataForm.valid){
      if(this.data === null){
        this.addNote()

      }else {
          this.updateNote()
      }
    }
  }

  updateNote():void {
    const model = {
        token:localStorage.getItem("_noteotken"),
        title:this.data.note.title,
        desc:this.data.note.desc,
        NoteID:this.data.note._id,
    }
    this._note.UpdateNote(model).subscribe({
      next:response => {
        if(response.message === "updated"){

          this.matDeialogRef.close("updated")
        }
      }
    })
  }
  addNote():void{
    const data = {
        ...this.dataForm.value,
        citizenID:this.userData._id
    }
     this._note.addNote(data).subscribe({
      next:(response:any)=>{
        if(response.message === "success"){
            this.matDeialogRef.close("add")
        }
        console.log(response)
      }
     })
  }

}
