import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { hexPipe } from './hex.pipe';


@NgModule({
  declarations: [
    AppComponent,
    hexPipe

  ],
  imports: [
    BrowserModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
