import { Injectable } from '@angular/core';
import { VideoGame } from './video-game';

@Injectable({
  providedIn: 'root'
})
export class VideoGamesService {

  TheList: VideoGame[] = [
    {title: 'Fortnite', year: 2017, console: true},
    {title: 'Zelda - Ocarina of Time', year: 1998, console: true},
    {title: "Zelda - Majora's Mask", year: 2000, console: true},
    {title: 'Dying Light', year: 2016, console: false},
  ]

  constructor() { }

get(){
  return this.TheList;
}
  
}
