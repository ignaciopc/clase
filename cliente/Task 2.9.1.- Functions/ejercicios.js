

//2. Write a function that returns the square of a number

    function cuadrado($n) {
        return $n*$n;
    }


//3. Write a function min(a,b) which returns the least of two numbers a and b.

function min(a,b) {
    return (a<b) ? a : b;
}


//4. Rewrite min function as an expression function 

let min  = function (a,b) {
    return (a<b) ? a : b;
}


//5. Rewrite min function as an arrow function

let min2 = (a,b) => (a<b) ? a : b;

//6. Write a function pow(x,n) that returns x in power n. Ask the user fot both numbers.


let n1 = Number(prompt("Dime la base"));
let n2 = Number(prompt("Dime el exponente"));

function pow(a,b) {
    return     Math.pow(a,b);
}

//7. Rewrite pow function as an expression function

let pow2 = function(a,b){
    Math.pow(a,b)
};

//8. Rewrite pow function as an arrow function

let pow = (a,b) => Math.pow(a,b);  


//9. Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
   }

   ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
   );


   let ask = (quest,y,n) => (confirm(quest)) ? y : n;

   /**
    * 10. Write a function named calculateSupply that:
            a) takes 2 arguments: age, amount per day.
            b) calculates the amount consumed for rest of the life (based on a constant max age).
            c) outputs the result to the screen like so: "You will need NN to last you until the ripe old
            age of X"
            Express it as an arrow function, if possible
    */

const maxEdad = 100;
   let calculateSupply = (age,apd) => "You will need "+(maxEdad-age)*apd+" to last you until the ripe old age of "+(maxEdad-age)
        

   /**
    * 11. Create a function that greets the user by his name and with a message according to the
      moment of the day (morning, afternoon, night). It accepts two parameters: user name and a
      callback function.

    */


      function saluda(nombre,fun) {
        
      }



      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
      }