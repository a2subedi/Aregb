/*export class Convert{
	public static toHex(argumnet : number){
		var arg = argumnet;
		var hex='',y='';
		var x,rem;
			do{
				x = parseInt(arg/16);
				rem = arg % 16 ;
				arg = (arg/16);
					
				if(rem <= 9){
					y+=rem;

				} 
				else if( rem>9 && rem<13 ){
					switch(rem){
						case 10:{
						y+='a';
						break;
						}
						case 11:{
						y+='b';
						break;
						}
						case 12:{
						y+='c';
						break;
						}
						default:
						//do nothing
					}
				}
				else{
					switch(rem){
						case 13:{
						y+='d';
						break;
						}
						case 14:{
						y+='e';
						break;
						}
						case 15:{
						y+='f';
						break
						}
						default:
						//do nothing
					}
				}

			}while(x!=0);


			for (var j = y.length - 1; j >= 0; j--) {
				hex+=y[j];
			}

			console.log(hex);
			return hex;
						
	}
}
*/