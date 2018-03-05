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
  //hexr = Convert.toHex(this.red);
  //hexg = Convert.toHex(this.green);
  //hexb = Convert.toHex(this.blue);
  //hexcode = '#'+this.hexr + this.hexg + this.hexb;
  
    
	update(){
		this.bgcolor = 'rgb('+this.red+','+this.green+','+this.blue+')';
    //this.hexr = Convert.toHex(this.red);
    //this.hexg = Convert.toHex(this.green);
    //this.hexb = Convert.toHex(this.blue);
    //this.hexcode = '#'+this.red + this.green + this.blue;
    //console.log(this.hexcode);  
	}
}