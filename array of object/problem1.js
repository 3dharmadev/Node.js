// question link- https://false-trouser-16e.notion.site/Problem-1-Employee-Details-f72a5275ccbf4572b243c5a02f4e18a0

let users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      point: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };
  
  function getLoggedInUsers(users){
    for(let obj in users){
     if(users[obj]["isLoggedIn"]==true){
       console.log( users[obj]["email"]);
     }
    }
  }  
// getLoggedInUsers(users);

 function getUsersByPoints(user, value){
 for(let key in user){
    if(user[key]["points"]==value){
        console.log(key ,user[key]["email"]);
    }
 }
}
let x=30;
// getUsersByPoints(users, x);

function getRequiredSkillUser(users, required_skill){
    // let bag="";
    for(let key in users){
        let array=users[key]["skills"];
        let count=0;
         for(let j=0;j<required_skill.length;j++){
            for(let i=0;i<array.length;i++){
            if(required_skill[j]==array[i]){
                count++;
            }
         }
        }
        if(count==3){
         console.log(key,users[key]["email"]);
        }
      }
    }

// required_skill = ['React', 'Redux'];
required_skill = ['HTML', 'CSS', 'JavaScript'];
getRequiredSkillUser(users, required_skill);