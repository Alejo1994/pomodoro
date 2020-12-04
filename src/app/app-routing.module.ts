import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';

const routes: Routes = [
  {path:'pomodoro',component:PomodoroComponent},
  {path:'**',pathMatch:'full',redirectTo:'pomodoro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
