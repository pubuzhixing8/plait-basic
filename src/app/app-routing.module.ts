import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicBoardComponent } from './board-basic/board-basic.component';

const routes: Routes = [
  {
    path: '',
    component: BasicBoardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
