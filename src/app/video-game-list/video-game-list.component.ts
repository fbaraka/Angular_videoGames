import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../video-game';
import { VideoGamesService } from '../video-games.service';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrls: ['./video-game-list.component.css']
})
export class VideoGameListComponent implements OnInit {


// Variables for the add game form 
addMode: boolean = false;
addTitle: string = '';
addYear: number = 0;
addConsole: boolean = false;

  constructor(public TheList: VideoGamesService) { }

  ngOnInit(): void {
  }

  doDelete(whichGame: VideoGame){
    for (let index = 0; index < this.TheList.get().length; index++) {
      if (this.TheList.get()[index] == whichGame) {
        this.TheList.get().splice(index, 1);
        return;
      };
    };
  }

  showAddForm(){
    this.addMode = true;
  }

  cancelAddForm(){
    this.addTitle = '';
    this.addYear = 0;
    this.addConsole = false;
    this.addMode = false;

  }

  addGame(){
    this.TheList.get().push(
      {
        title: this.addTitle,
        year: this.addYear,
        console: this.addConsole
      }
    );

      this.cancelAddForm();
   
    
  }


  

 
}
