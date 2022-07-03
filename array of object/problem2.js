
let student_details=
[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},                                        
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];


function marks_array(para){
    sum=0;
    for(let i=0;i<para.length;i++){
      sum=sum+para[i];
    }
    return sum;
}

function brilliant_students_details(info){
  let student_grade=info.grade;
  let max=-Infinity;
  let name;
  for(let i=0;i<info["students"].length;i++){
    let total_marks=marks_array(info.students[i].marks);
     if(max<total_marks){
       name=info.students[i].name;
        max=total_marks;
     }
  }
  console.log(student_grade+"-"+name+"-"+max);

}
for(let i=0;i<student_details.length;i++){
    brilliant_students_details(student_details[i]);
}