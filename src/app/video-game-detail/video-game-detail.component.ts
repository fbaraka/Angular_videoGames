import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoGame } from '../video-game';

@Component({
  selector: 'app-video-game-detail',
  templateUrl: './video-game-detail.component.html',
  styleUrls: ['./video-game-detail.component.css']
})
export class VideoGameDetailComponent implements OnInit {

  @Input() TheGame: VideoGame = {
    title: 'Fortnite',
    year: 2017,
    console: true
  }

  editMode: boolean = false;
  editTitle: string = '';
  editYear: number = 0;
  editConsole: boolean = false;

  @Output() delete : EventEmitter<VideoGame> = new EventEmitter<VideoGame>();

  constructor() { }

  ngOnInit(): void {
  }

  editGame(){
    this.editMode = true;
    this.editTitle = this.TheGame.title;
    this.editYear = this.TheGame.year;
    this.editConsole = this.TheGame.console;

    
  } 

  deleteGame(){
    this.delete.emit(this.TheGame);
  }

  saveChange(){
    this.TheGame.title = this.editTitle;
    this.TheGame.year = this.editYear;
    this.TheGame.console = this.editConsole;
    this.editMode = false;
  }

  cancelChange() {
    this.editMode = false;
  }

}
