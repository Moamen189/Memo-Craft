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
  ngOnInit(): void {
    this.getNotes();
  }
  openDialog():void {
  this.dialog.open(NoteDataComponent);
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
}
