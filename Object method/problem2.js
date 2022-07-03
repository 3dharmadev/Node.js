// Given information in a data i.e contain the keys as name, toUpperCase 
// and toLowercase.
// toUpperCase : function to print the uppercase of the given name
// toLowerCase : function to print the lowercase of the given name

data = {

					name : "Suraj Lal Singh",
					toUpperCase : function(){
                        let bag="";
							let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                            let lower="abcdefghijklmnopqrstuvwxyz";
                            for(let i=0;i<this.name.length;i++){
                                let bhai="nehin mila";
                                let value;
                                for(let j=0;j<upper.length;j++){
                                    if(this.name[i]==lower[j]){
                                      bhai="milgeya";
                                       value=upper[j];
                                    }
                                
                                }
                                if(bhai=="nehin mila"){
                                    bag=bag+this.name[i];
                                }
                                else{
                                    bag=bag+value;
                                }
                               
                        
                            }
                            console.log(bag);					
						},
					toLowerCase : function(){
		            
                        let bag="";
                        let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                        let lower="abcdefghijklmnopqrstuvwxyz";
                        for(let i=0;i<this.name.length;i++){
                            let bhai="nehin mila";
                            let value;
                            for(let j=0;j<upper.length;j++){
                                if(this.name[i]==upper[j]){
                                  bhai="milgeya";
                                   value=lower[j];
                                }
                            
                            }
                            if(bhai=="nehin mila"){
                                bag=bag+this.name[i];
                            }
                            else{
                                bag=bag+value;
                            }
                           
                    
                        }
                        console.log(bag);	

						 }
			}
            data.toUpperCase();
            data.toLowerCase();