employee = {
    data : [],
    addEmployee : function(nam,dept,sal,level){
        let obj={};
        obj["name"]=nam;
        obj["department"]=dept;
        obj["salary"]=sal;
        obj["level"]=level;
        this.data.push(obj);
    },
    
    // Print all the empoyees name
    getEmployees : function() {
        for(let i=0;i<this.data.length;i++){
            console.log(this.data[i]["name"]);
        }
    },
    
    // Find the Employee Object who has max salary
    getHighestSalaryEmployee : function() {
        let max=-Infinity;
        let name;
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]["salary"]>max){
                max=this.data[i]["salary"];
               name=this.data[i]["name"];
            }
        }console.log(name);
    },
    
    // Given a Department ,Find the Employee Object of given department
    // who has max salary
    getHighestSalaryByDepartment : function(department) {
        let max=-Infinity;
        let departmentt;
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]["salary"]>max){
                max=this.data[i]["salary"];
               departmentt=this.data[i]["department"];
            }
        }console.log(departmentt);
    },
    
    // Given a Level ,Find the Employee Object of given level
    // who has max salary
    getHighestSalaryByLevel : function(level) {
        let max=-Infinity;
        let levell;
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]["salary"]>max){
                max=this.data[i]["salary"];
               levell=this.data[i]["level"];
            }
        }console.log(levell);
    },

    // Given a Department, Find the avg salary of that department
    getAverageSalaryOfDepartment : function(department){
        let total=0;
        let count=0;
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]["department"]==department){
                 total=total+this.data[i]["salary"];
                 count++;
            }
        }
        console.log(total/count);
    },

    // Given a value y ,Find the Employee Object whose salary is below y
    getEmployeeBelowSalaryY : function(y){
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]["salary"]>y){
                 console.log(  this.data[i]["name"]);
            }
        }
    },

    // Find how many departments exist ?
    getCountOfDepartment : function() {
        for(let i=0;i<this.data.length;i++){
            
                 console.log(  this.data[i]["department"]);
        }
    },

    // Given Department, Find How many employees are their in that department.
    getCountOfEmployeesInDepartment : function(department) {
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]["department"]==department){
                 console.log(  this.data[i]["name"]);
            }
        }
    },
    
    // Given name and salary, update the salary of the employee
    updateEmployeeSalary : function(name, salary) {
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]["salary"]==salary && this.data[i]["name"]==name){
                this.data[i]["salary"]=5000;
            }
        }
    }
};
          employee.addEmployee("Rahul","Tech",60000,1);
					employee.addEmployee("Rajan","Finance",40000,1);
					employee.addEmployee("Shubham","Ops",30000,1);
					employee.addEmployee("Mohan","Marketting",35000,1);
					employee.addEmployee("Sohan","Tech",80000,2);
					employee.addEmployee("Lalu","Finance",60000,2);
					employee.addEmployee("Sneha","Ops",55000,2);
					employee.addEmployee("Tanya","Marketting",57000,2);
          employee.addEmployee("Raman","Tech",90000,3);
					employee.addEmployee("Prasad","Finance",85000,3);

// employee.getEmployees();
// employee.getHighestSalaryEmployee();
// employee.getHighestSalaryByDepartment();
// employee.getHighestSalaryByLevel();
// employee.getAverageSalaryOfDepartment("Finance");
employee.getEmployeeBelowSalaryY(35000);
// employee.getCountOfDepartment();
// employee.getCountOfEmployeesInDepartment("CS");
// employee.updateEmployeeSalary("ANyone",222);
// console.log(employee.data);