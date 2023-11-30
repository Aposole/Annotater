import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { AnnotationComponent } from './annotation/annotation.component';
import { AnnotaterComponent } from './annotater/annotater.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    AnnotationComponent,
    AnnotaterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
