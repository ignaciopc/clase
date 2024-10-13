//1. What is the last value output by this code? Why?

let i = 3;
while (i) {
    Console.log(i--);
}



//2. Rewrite the following code changing the for loop to while without altering its behavior
//(the out  same).

for (let i = 0; i < 3; i++) {
    Console.log(`number ${i}!`);
}

let k = 0;
while (k < 3) {
    console.log(`number ${k}!`);
    k++;
}

////. Write a loop which keeps prompting for a number until it is greater than 100 or enters an

let flag = true;
do {
    let n = Number(prompt("Dime un numero"));

    if (n > 100 || n == "") {
        n = false;
    }
} while (!flag);


//Using while loop, create two arrays: one with even numbers and another one with odds
//numbers. Both of them from 1 to n, being n a number provided by user. Using a for loop,
//create a third array whose nth number is the sum of nth number of both arrays.

let n = Number(prompt("Dame un numero"));
let flags = true;
let im, p;
let ai = [], ap = [];

if (!n % 2 == 0) {
    im = n;
    p = n - 1;
} else {
    im = n - 1;
    p = n;
}


while (flags != false) {

    if (im == 0 || p == 0) {
        flags = false;
    } else {

        ai[ai.length] = im;
        ap[ap.length] = p;
        im -= 2;
        p -= 2;
    }

}

let suma = [];

for (let index = ai.length - 1; index >= 0; index--) {
    suma[index] = ai[index] + ap[index]
}

console.log(ai);
console.log(ap);


console.log(suma);


//Write code which outputs prime numbers from 1 to n, being the latter a numbrer
//provided by user



let nu = Number(prompt("Dime un numero"))
let bandera = false;

for (let index = 2; index < n; index++) {

    if (n % index == 0) {
        bandera = true;
    }

}


if (!bandera) {
    console.log("Es primo")
} else {
    console.log("No es primo")
}

//Take odd numbers array and remove the prime numbers from it. Tip: as we have not
//seen array methods yet, the only way is to create a new array without those numbers

let num = Number(prompt("Dime un numero"));
let bande = false;
let numImp = [];
let cons = 0;
for (let index = 0; index < num; index++) {

    if (index % 2 != 0) {

        for (let ind = 2; ind < index; ind++) {

            if (index % ind == 0) {
                bande = true;
            }

        }
        if (bandera == true) {
            numImp[cons] = index;
            cons++;
            bande = false;
        }

    }

}

console.log(numImp);


//7. Ask the user for a number n. Create an array of n random numbers and print the highest
//one. Use the following code to generate a random number between 0 and 9999
let capa = Number(prompt("Dime un numero"));

let ar = [];
let consa = 0;
let numero = 0;
for (let index = 0; index < capa; index++) {
    let ale = Math.floor(Math.random() * 9999);
    ar[consa] = ale;
    cons++;
    if (numero < ale) {
        numero = ale;
    }
}


//8. Ask the user for a string and print it reversed

let pal = "hola";

let array = [];
let cont = 0;
for (let index = pal.length - 1; index >= 0; index--) {
    array.push(pal[index]);
}

//Ask the user for a number. Print a isosceles triangle made of asterisks with as many
//levels as the number the user entered.

let tri = Number(prompt("Dime un numero"))


let arr = [];
let co = 0;
for (let index = 0; index < tri; index++) {

    for (let inte = 0; inte < index; inte++) {

        if (inte == 0 || inte == 10 - 1 || co == 0) {
            arr[arr.length] = "*"
        } else {
            arr[arr.length] = " "

        }

    }
    co++;
    console.log(arr);
    arr = [];


}





//10. Ask the user for a number between 3 and 25. Calculate its factorial.

let fact = Number(prompt("Dime un numero entre 3 y 25"));


let sol = 0;
for (let index = fact; index > 0; index--) {

    if (fact == index) {
        sol = index;
    } else {
        sol *= index;
    }


}


console.log(sol);


//11. Ask the user for a string and write a program that checks if it is palindrome (it is spelled
//the same forward and backward)

let palin = prompt("dime una palabra");

let array2 = [];
let cont2 = 0;
let si = true;
    for (let index = pal.length - 1; index >= 0; index--) {
            if (palin[index] != palin[cont2]) {
                si = false;
            }

            cont2++;
    }

    (si) ? console.log("Es palindromo"): console.log("No es palindromo");



//12. Use the following code to generate a random pin number of 4 digits. Write code to allow
//a user to try to guess the number in 4 attempts


let numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

let com = true;
    for (let index = 0; index < 4; index++) {

        let solucion = Number(prompt("Dime el numero"));

        if (solucion == numeroAleatorio && com == true) {
            console.log("Has acertado")
            com = false;
        }
        
    }
