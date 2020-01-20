import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRouting } from './app.routing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'ng2-file-upload';
import { FrontComponent } from './_core/components/front/front.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
