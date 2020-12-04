import { Component, OnInit } from '@angular/core';
import { PomodoroService } from 'src/app/services/pomodoro.service';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {

  min:number;
  second:number;
  interval:any;
  description:string;
  status = true;

  constructor(private pomodoroService: PomodoroService) { }

  ngOnInit(): void {
    this.min=24;
    this.second=59;
    this.description= ''; 
  }

  start(){
    this.status=true;
    this.interval= setInterval(()=>{
      this.second = this.second-1;
      if(this.second === 0){
        
        
        if(this.min > 0){
          this.min=this.min-1;
          this.second=59;
        }

        if(this.min === 0 && this.second === 0){

          this.reset();
          this.status=false;
        }
      }
    },1000);
  }

  pause(){
    this.status=false;
    clearInterval(this.interval);
  }

  reset(){
    clearInterval(this.interval);
    this.status=true;
    this.min=24;
    this.second=59;
  }

  savePomodoro(){
    this.pomodoroService.addPomodoro({description:this.description});
  }

}
