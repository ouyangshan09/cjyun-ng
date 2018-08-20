import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePath } from './constant/route.constant';

const routes: Routes = [
  // { path: '', redirectTo: `/${RoutePath.DASHBOARD}`, pathMatch: 'full' },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
