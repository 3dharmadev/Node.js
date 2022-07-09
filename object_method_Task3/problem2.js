// Given information in a data i.e contain the keys as str 

// Implement the following methods :
// startsWith : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
// includes : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// endsWith : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
// at : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at

// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

data = {

    str : 'The quick brown fox jumps over the lazy dog.',
    startsWith : function(word){
         let word_found=false;
         bag="";
                for(let i=0;i<this.str.length;i++){
                    bag=bag+this.str[i];
                    if(bag==word){
                        word_found=true;
                        break;
                    }
                }
                console.log(word+" "+"is present is"+" "+word_found);
                    
                                },


    endsWith : function(word){
        let bag1="";  
        let bag="";
        let ispresent=false;
        for(j=word.length-1;j>=0;j--){
            bag=bag+word[j];
                                     }
        for(let i=this.str.length-1;i>=0;i--){
            bag1=bag1+this.str[i];
                if(bag==bag1){
                 ispresent=true;
                 break;
                }
             }                             
 console.log(ispresent);
            },


    includes : function(word){
        let string1=this.str;
        found_successfully=false;
            for(let i=0;i<string1.length;i++){
                let bag="";
                for(let j=i;j<string1.length;j++){
                    bag=bag+string1[j];
                    if(bag==word){
                        found_successfully=true;
                        break;
                    }
                }
            }  console.log(found_successfully);
                            },


    at : function(index){
        let arr=[];
        let bag="";
        for(let i=0;i<this.str.length;i++){
            if(this.str[i]!=" "){
                bag=bag+this.str[i];
            }
            
          else if(this.str[i]==" "){
                arr.push(bag);
                bag="";
                continue;
            }
            

            
        }
        console.log(arr);
         let res=0;
       for(let j=0;j<arr.length;j++){
            if(arr[j]==index){
             res=j+1;
            }
          
        } console.log(res);
     }
             
};
// data.startsWith("The quick brown");
// data.endsWith("the lazy dog.");
// data.includes("mouse");
data.at("the");