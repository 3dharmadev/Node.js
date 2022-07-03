let obj={
    data:{
        name:["debabrata","lakshmi","pitu","kanha"] ,
        gender:["M","F","F","M"]
    },
    return_user_gender:function(put_gender){
        let input_gender=this.data["gender"];
         for(let i=0;i<input_gender.length;i++){
            if(input_gender[i]==put_gender){
              console.log(this.data["name"][i]);
            }
         }
    },
    return_name_into_gender:function(name){
        let bag="";
        let input_name=this.data["name"];
        for(let i=0;i<input_name.length;i++){
            if(name==input_name[i]){
                bag=bag+this.data["gender"][i];
            }
        }
        if(bag==""){
            console.log("NA");
        }
        else{
            console.log(bag);
        }
        
    }

};
// obj.return_user_gender("M");

obj.return_name_into_gender("kanha");
