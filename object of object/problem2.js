let nam=["Shirt", "Jeans", "Shoes","Slippers"];
let quantity=[2, 3, 1, 4];
let price=[600, 1500, 2000, 500];
let rating=[3.5, 4, 2, 4];
let obj={
    data:[],
    addItem:function(name,quantity,price,rating){
      let obj1={};
     obj1["name"]=name;
     obj1["quantity"]=quantity;
     obj1["price"]=price;
     obj1["rating"]=rating;
     this.data.push(obj1);
    },
    filterProduct:function(rating,price){ 
       let bhai ="nehin mila";
      let value;
     for(let i=0;i<this.data.length;i++){
        if(this.data[i]["rating"]>=rating && this.data[i]["price"]>=price){
          bhai="milgeya";
           value=this.data[i]["name"];
        }
      }
      if(bhai=="nehin mila"){
        console.log("Not Availble");
      }
      else{
        console.log(value);
      }
     } ,
     totalPrice:function(name_product){
        let total_price=0;
          for(let j=0;j<name_product.length;j++){
            for(let i=0;i<this.data.length;i++){
            if(name_product[j]==this.data[i]["name"]){
                total_price=total_price+this.data[i]["quantity"]*this.data[i]["price"];
            }
        }
     }
     console.log(total_price);
    },
    deleteItem:function(name){
        for(let i=0;i<this.data.length;i++){
            if(name==this.data[i]["name"]){
                delete this.data[i];
            }
        }
    }
};


    for(let i=0;i<nam.length;i++){

    obj.addItem(nam[i],quantity[i],price[i],rating[i]);


    }
    obj.filterProduct(4,14500);
    // names = ["Jeans","Shoes"];
    // obj.totalPrice(names);
    // obj.deleteItem("Jeans");
    //  console.log(obj["data"]);