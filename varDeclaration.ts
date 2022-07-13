//  var scopes to the nearest function
//  let will limit the scope to the current block

/*
function doSomething() {
    for(var i=0; i<5; i++) {
        console.log(i)
    }

    console.log("I final value is: " + i)
}

doSomething()
*/


//  staticly typing and static enums

/*
let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[] = [];
let f: any = [1, true, 'a', false];
enum Colors {Red = 0, Green = 1, Blue = 2};
let backgroundColor: number =  Colors.Blue;
console.log(backgroundColor);
*/

//  type assertion

/*
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');  // type assertion
// or
let alternativeWay = (message as string).endsWith('c');
*/


// arrow functions


/*
let log = function(message) {
    console.log(message);
}

//  with arrow func

let arrowLog = (message: string) => console.log(message)
*/
