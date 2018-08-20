import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePath } from './constant/route.constant';
import { HomeComponent } from './routes/home/home.component';
import { NotfountComponent } from './components/notfount/notfount.component';

const routes: Routes = [
  { path: RoutePath.HOME, component: HomeComponent },
  { path: RoutePath.LAST, component: NotfountComponent }
  // { path: '', redirectTo: `/${RoutePath.DASHBOARD}`, pathMatch: 'full' },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
