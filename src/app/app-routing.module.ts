import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './components/heros/heros.component';
import { RoutePath } from './constant/route.constant';

const routes: Routes = [
  { path: RoutePath.HEORS, component: HerosComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
