a();
b();

//Function Statement or Function declaration (both are same thing)
function a() {
    console.log("a called");
 }


//Function Expression or anonymous function expression
let b = function () {
    console.log("b called");
 }
    /*function statement are hoisted onto the beginning of the scope but Function expressions are not hoisted onto 
    the top of the scope, therefore they can't be used before they appear in the code. 
    
    The main difference between a function expression and a function declaration is the function name, which can
    be omitted in function expressions to create anonymous functions. 
    */


//IIFE (Immediately Invoked Function Expression).
(function () {
    statements
 })();



//Anonymous Function
function() {
    console.log("anonymous");
 }
/*  Anonymous functions are functions without names.
    Anonymous functions can be used as an argument to other functions or as an immediately invoked function expression.*/



//Named Function Expresssion
let x = function xyz() {
    console.log("b called");
}
/* x()
   xyz() -> give error because it created is created in local scope not in global space */



/*  Difference between Parameters and Arguments?

    Function parameters are the names listed in the function's definition.
    Function arguments are the real values passed to the function.
    Parameters are initialized to the values of the arguments supplied.
*/



//First Class Functions

/*First-class functions are functions that can be treated like any other value. 
 You can pass them to functions as arguments, return them from functions, and save them in variables. */

    //Passing a function as an argument
    function Hello() { return "Hello, "; }

    function greeting(Message, name) {
        console.log(Message() + name);
    }

    greeting(Hello, "JavaScript!");


    //Returning a function 
    function sayHello() {
        return () => {
            console.log("Hello!");
        };
    }

    //Assigning a function to a variable
    const foo = () => {
        console.log("foobar");
    };
    foo();


//Arrow Functions