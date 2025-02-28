import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsBoardComponent } from './jobs-board/jobs-board.component';
import { InterestedJobsBoardComponent } from './interested-jobs-board/interested-jobs-board.component';

const routes: Routes = [
  {path:'', component:JobsBoardComponent},
  {path:'interested-job-board',component:InterestedJobsBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
