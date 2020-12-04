import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PomodoroService {

  constructor(private db:AngularFirestore) { }

  async addPomodoro(pomodoro: any){
    return this.db.collection("pomodoro").add(pomodoro);
  }
}
