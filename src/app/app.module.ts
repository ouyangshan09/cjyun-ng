import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HerosComponent } from './components/heros/heros.component';
import { MessageComponent } from './components/message/message.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { AdminRoutingModule } from './routes/admin/admin-routing.module';
import { SchoolRoutingModule } from './routes/school/school-routing.module';
import { HomeComponent } from './routes/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    MessageComponent,
    DashboardComponent,
    HeroDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminRoutingModule,
    SchoolRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
