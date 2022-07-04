data = [   
    {name: "IPad", price: 40000, rating: 4,category: "Computer"},
    {name: "HP Laptop" , price: 60000, rating: 3,category: "Computer"},
    {name: "JBL Speaker" , price: 5000, rating: 4,category: "Computer"},
    {name: "Boat Headphone" , price: 2000, rating: 4,category: "Computer"},
    {name: "Ear Phone" , price: 500, rating: 3,category: "Computer"},
    {name: "Tomato", price: 40, rating: 4,category: "vegetable"},
    {name: "Onion" , price: 60, rating: 3,category: "vegetable"},
    {name: "Wheat" , price: 500, rating: 2,category: "Grocery"},
    {name: "Rice" , price: 200, rating: 3,category: "Grocery"},
    {name: "Dal" , price: 400, rating: 3,category: "Grocery"},
    {name: "Potato", price: 20, rating: 2,category: "vegetable"},
    {name: "Cabbage" , price: 40, rating: 4,category: "vegetable"},
  {name: "Cabbage" , price: 40, rating: 4,category: "vegetable"},
];
amazon  = {
        data : [],
        cart : [],
        addProduct : function(nam, pri, rat, cat){
           let obj={};
           obj["name"]=nam;
           obj["price"]=pri;
           obj["rating"]=rat;
           obj["category"]=cat;
           this.data.push(obj);
        },
        getProducts : function() {
            for(let i=0;i<this.data.length;i++){
                console.log(this.data[i]["name"]);
            }
        },
        getMaxPriceCategory : function(cat) {
           let max=-Infinity;
         for(let i=0;i<this.data.length;i++){
            if(this.data[i]["category"]==cat && max<this.data[i]["price"]){
                max=this.data[i]["price"];
            }
         }
         console.log(max);
        },
        getProductsinRange : function(range1, range2) {
           for(let i=0;i<this.data.length;i++){
            if(this.data[i]["price"]>=range1 && this.data[i]["price"]<=range2){
                console.log(this.data[i]["name"]);
            }
           }
        },
        getProductsByCategory : function(category) {
            for(let i=0;i<this.data.length;i++){
                if(this.data[i]["category"]==category){
                    console.log(this.data[i]["name"]);
                }
            }
        },
        getCountProductsByCategory : function(category) {
           let   count=0;
            for(let i=0;i<this.data.length;i++){
                if(this.data[i]["category"]==category){
                    count++;
                }
            }
            console.log(count);
        },
        getCountProductsAllCategory : function(){
            let obj={};
            for(let i=0;i<this.data.length;i++){
                let value=this.data[i]["category"];
                if(obj[value]==undefined){
                    obj[value]=1;
                }
                else{
                    obj[value]++;
                }
            }
            console.log(obj);
        },
        addItemToCart : function(index) {
          this.cart.push(index);
        },
        updateProductPrice : function(name, price) {
            for(let i=0;i<this.data.length;i++){
                if(this.data[i]["name"]==name){
                    this.data[i]["price"]=price;
                }
            }
        },
        getCartProducts : function() {
            console.log(this.cart);
        }
 
};
	for(let i=0;i<data.length;i++){
     amazon["data"].push(data[i]);

    }
amazon.addProduct("Noodles",5000,4,"Grocery");
console.log(amazon.data);
amazon.getProducts();
amazon.getMaxPriceCategory("Grocery");
amazon.getProductsinRange(50,300);
amazon.getProductsByCategory("Grocery");
amazon.getCountProductsByCategory("Computer");
amazon.getCountProductsAllCategory();
amazon.addItemToCart("Noodles");
console.log(amazon.cart);
amazon.updateProductPrice("Noodles",120);
console.log(amazon.data);
amazon.getCartProducts();
