import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteDataComponent } from '../note-data/note-data.component';
import { NoteService } from 'src/app/Core/Services/note.service';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog , private _note : NoteService , private auth:AuthService ) { }
  nots:any[] = [];
  value = '';
  ngOnInit(): void {
    this.getNotes();
  }
  openDialog() {
    const dialogRef = this.dialog.open(NoteDataComponent);

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if(result === "add"){
          this.getNotes();
        }
      }
    
    });
  }
  getNotes():void{
    const model = {
      token: localStorage.getItem('_noteotken'),
      userID:this.auth.user.getValue().id
    }
    this._note.getNotes(model).subscribe({
      next: (res) => {
        if(res.message === "success"){
          this.nots = res.Notes;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteNote(id:string , index:number):void{
    const model = {
      NoteId:id,
      token:localStorage.getItem('_noteotken')
    }

    this._note.deleteNotes(model).subscribe({
      next: (res) => {
        if(res.message === "deleted"){
          this.nots.splice(index, 1);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
