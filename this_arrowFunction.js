class student{
    static count = 0;
 constructor(name, age, phone, marks){
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.marks = marks;
    student.count++;

 
    }
     eligibility = ()=>{
        if(this.marks>=40){
          return true;
        }
        else return false;
      }

      eligibilityForPlacement =(minMarks)=>{
       
        return (minAge)=>{
            if(this.marks>minMarks && this.age>minAge){
               console.log(this.name);  
            }
        }
      }
}

let obj1 = new student("arun",23,7730587899,90);
let obj2 = new student("harry",24,9878975364,80);
let obj3 = new student("niv",21,9716774329,95);
let obj4 = new student("nicole",26,8882114567,60);
let obj5 = new student("botson",25,9926056439,72);
console.log(student.count);

obj1.eligibilityForPlacement(70)(22);
obj2.eligibilityForPlacement(70)(22);
obj3.eligibilityForPlacement(70)(22);
obj4.eligibilityForPlacement(70)(22);
obj5.eligibilityForPlacement(70)(22);



//Arrow function
function getA1(a){
    return a;
}

let getA2 = a => a;
let square1 = a=> a*a;
let square2 = a=>{return a*a};

//if argument already declared outside
var a =4;
let square3 = () => a*a;
square3();//output - 16

//using two arguments
let multiple = (a,b)=>{return a*b};
multiple(3,4);//output - 12


//main use of arrow function

// var x = function(){
//     var that = this;
//     this.val =1;
//     setTimeout(function (){
//         that.val++;
//         console.log(that.val)
//     },1)
//     };

//var fun = new x();

//we can remove that var by using arrow function
var x = function(){

    this.val =1;
    setTimeout(()=>{
        this.val++;
        console.log(this.val)
    },1)
    };
var fun = new x(); 

//below code is not available in arrow function
var y = (...n) => {
    console.log(n[2])//output 23
};

y(45,34,23);