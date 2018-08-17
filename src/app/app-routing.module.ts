import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './components/heros/heros.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoutePath } from './constant/route.constant';

const routes: Routes = [
  { path: '', redirectTo: `/${RoutePath.DASHBOARD}`, pathMatch: 'full' },
  { path: RoutePath.HEORS, component: HerosComponent },
  { path: RoutePath.DASHBOARD, component: DashboardComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
