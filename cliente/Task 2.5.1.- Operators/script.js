
//Task 2.6.1.- Operators


//1. What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a; // a = 2, b = 1 , c = 2
let d = b++; // a = 2, b = 2 , c = 2 , d = 1


//2. What are the values of a and x after the code below?
let e = 2;
let x = 1 + (e *= 2);

// e = 4
// x = 5

//3. What will be the result for these expressions?

5 > 4 //true
"apple" > "pineapple" // false porque la p es "mayor a nivel de abecedario" 
"2" > "12" // true porque al ser dos numeros solo compara el primero por lo que se compararia el 2 y el 1 y 2 es mayor 
undefined == null //true porque por las dos no tienen valores en sí 
undefined === null //false porque aunque las dos no tengan valores no son del mismo tipo
null == "\n0\n" // falso porque el string tiene un valor
null === +"\n0\n" // falso porque el string tiene un valor y aparte no son del mismo tipo

//4. What are the results of these expressions?

"" + 1 + 0  // Sale 10 porque al estar el "" los trata como String y porque el "+" tambien se puede utlizar para concatenar cadenas entonces 
//entonces ""+1 al convertilo a string seria "1" y luego le sumaria 0 que lo trata como otro string "10" 
"" - 1 + 0 //  Sale -1 ya que el menos intenta convertir el "" a numero y lo poner a 0 entonces la operacion seria (0-1+0) que seria -1
true + false // Sale 1 ya que el true lo trata como numero y seria un 1 y el false seria un 0 entonces seria (1+0)
6 / "3" // Sale 2 ya que el / lo convierte a numero el 3 y seria (6/3)
"2" * "3" // Seria 6 ya que la mutliplicacion los convierte en numero y seria asi (2*3)
4 + 5 + "px" //Seria 9px ya que primero los trata como numero y luego lo pasa String asi que seria "9"+"px" porque px no es un numero
"$" + 4 + 5  //Seria "$45" ya que empiza a concatenar string porque va de izquierda a derecha y el "$" no es un numero
"4" - 2 // Seria 2 porque el 4 al ser un numero lo pasa a numero y luego hace la resta(4-2)
"4px" - 2 //seria   NaN porque el menos no concatena ni nada solo hace la operacion asi que no se puede hacer una operacion con unas letras
" -9 " + 5 // Seria "-95" porque el + lo trata como String al -9 ya que va despues del string
" -9 " - 5 // Sale -14 porque el - del medio cambia a numero el "-9"
null + 1 // Sale 1 porque el null en numero es 0
undefined + 1 // Sale NaN porque el undefined no tiene valor numerico
" \t \n" - 2 // Sale -2 ya que el string por asi decirlo esta vacio por lo que en valor numerico seria 0

//4. Here’s a code that asks the user for two numbers and shows their sum. It works incorrectly.
//The output in the example below is 12 (for default prompt values). Why? Fix it. The result
//should be 3.


let a1 = prompt("First number?", 1);
let b1 = prompt("Second number?", 2);
alert(a1 + b1); // Sale error ya que el prompt devuelve un String  entonces se tendria que poner un umber para parsealor

// Task 2.6.2.- Logical operators

//1. Explain each otuput of the following code

Console.log( null || 2 || undefined ); //Sale 2 ya que el valor de null es vacio
Console.log( 1 && null && 2 ); // Sale null ya que en && en el momento en el que sale null, false se sale
Console.log( null || 2 && 3 || 4 ); // Sale 3 ya que si un and se hace true se sale ya que el primer null se sale porque en un or si hay un verdadero se mete ahi 
let z = 3;
console.log((z < 5) && (z > 0)); // Sale true ya true y true sale true
console.log((z < 5) && (z > 6)); // Sale false ya que false y true sale false 
console.log((z > 2) || (z > 5)); // Sale true ya que el primer parentesis sale true
console.log((z > 3) || (z < 0)); // Sale false ya que los dos parentesis son falses
console.log(!(z == 3)); // Sale false ya que el parentesis sale true y al negarlo sale false
console.log(!(z < 2));  // Sale true ya que el parentesis sale false y luego al negarlo sale true 

// 2. Change the code inside console.log so output is true
const numOne = 5;
const numTwo = 6;
console.log(numOne != numTwo); // He cambiado el (==) a (!=) ya que sale true si los dos numeros son diferentes


//3. Ask user for his age and check that it is not between 14 and 90 inclusively. Create two
//variants: the first one using NOT !, the second one – without it.


let edad = Number(prompt("Que edad tienes?"))


if (!(edad <= 90) || !(edad >= 14)) {
    console.log("es menor de 14 o mayor de 90"); 
}else{
    console.log("es mayor de 14 y menor de 90");
    
}


if ((edad >= 90) || (edad <= 14)) {
    console.log("es menor de 14 o mayor de 90"); 
}else{
    console.log("es mayor de 14 y menor de 90");
    
}



//4. Explain what result will produce the following code

(-1 || 0) && ( 'first' ); //Sale first porque el primer parentesis saca -1 ya que se sale con el primer true y luego en un and si los dos son true saca el ultimo
(-1 && 0) || ( 'second' ); // Saca second ya que el primer parentesis sca false y el or pasa al siguiente que si es true lo saca y como second es true lo saca
(null || -1 && 1) && ( 'third' ); //  Sale third  ya que el primer parentesis es (false true) y cuando encuentra un true se sale y true  && true  saca el ultimo true


//Conditional execution
//1. Check if a number is odd or even

let n = 12;

(n%2 == 0) ? console.log("Es par") : console.log("Es impar");


//2. Check if input variable is a number or not

(typeof(n) == "number") ? console.log("Es un numero") : console.log("No es un numero");

//3. Find the largest of two number
let n1 = 100, n2 = 1000;
(n1>n2) ? console.log("El numero mayor es "+n1) : console.log("El numero mayor es "+n2);

//4. Find the largest of three number
let n3 = 120,n4 = 40,n5 =8000;
 (n3>n4) ? (n3>n5) ? console.log("El numero mayor es "+n3) : console.log("El numero mayor es "+n5) : (n5>n4) ? console.log("El numero mayor es "+n5) : console.log("El numero mayor es "+n4);
 

 //5. Check if a triangle is equilateral (all side equal), scalene (all side unequal), or isosceles (2
// sides are equals)

 let lado1 = 4,lado2 = 3,lado3 =5;
(lado1 == lado2 && lado1 == lado3 ) ? console.log("Triangulo equilatero") : (lado1 == lado2 || lado1 == lado3 || lado3 == lado2) ? console.log("Triangulo isosceles") : console.log("Triangulo escaleno");


//6. Find the a number is present in given range (provide start, end and number to be found)

//7. Check if a year is leap year or not. A leap year is 1.- divisible by 400 OR 2.- divisible by 4
//and not by 100


let anio  = 2024;

if (anio%400 == 0 || anio%4 == 0 && !anio%100 == 0) {
    console.log("Es un año bisiesto");
    
}else{
    console.log("No es un año bisiesto");

}


//8. Rewrite the former if by using the ternary operator


(anio%400 == 0 || anio%4 == 0 && !anio%100 == 0) ? console.log("Es año bisiesto") : console.log("No es una año bisiesto");


//9. Show the number of days in a given month


//10. Rewrite the former if by using a switch statement



//12. Will alert be shown?


if ("0") {
    alert( 'Hello' );
   }

   //Si se muestra porque cualquier cadena es true menos "" que es cadena vacia


   //13. Rewrite the following code to optimize it (do not use switch). Rewrite again the following
   //code by using a switch statement

   let g = +prompt('a?', '');
if (a == 0) {
 alert( 0 );
}
if (a == 1) {
 alert( 1 );
}
if (a == 2 || a == 3) {
 alert( '2,3' );
}
