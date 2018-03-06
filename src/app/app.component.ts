import { Component } from '@angular/core';
//import { Convert } from './convert';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Color Mixer';
  red : number = 128;
  green : number = 128;
  blue : number = 128;
  showvalues : string = null;
  bgcolor : string = 'rgb('+this.red+','+this.green+','+this.blue+')';

  
    
	update(){
		this.bgcolor = 'rgb('+this.red+','+this.green+','+this.blue+')';
   
	}
}