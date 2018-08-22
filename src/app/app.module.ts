import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminRoutingModule } from './routes/admin/admin-routing.module';
import { SchoolRoutingModule } from './routes/school/school-routing.module';
import { HomeComponent } from './routes/home/home.component';
import { NotfountComponent } from './components/notfount/notfount.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminRoutingModule,
    SchoolRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
