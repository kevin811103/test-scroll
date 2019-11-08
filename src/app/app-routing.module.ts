import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestScrollComponent } from './test-scroll/test-scroll.component';

const routes: Routes = [
  { path: 'test-scroll', component: TestScrollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
