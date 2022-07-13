//  interfaces

/*
interface Point {  // use pascal case
    x: number,
    y: number
}


let drawPoint(point: Point) {
    // ... do smth

}
*/

// classes


/* class with class variables

class Point {
    x: number;
    y: number;

    draw() {
        // we can access x and y from the class itself
        console.log("X is " + this.x + ", Y is " + this.y)
    }
    
    getDistance(another: Point) {
        // ... do smth
        console.log("Calculating the distance ...")
    }
}

let point = new Point()  // we don't need to give hint about type of point here
point.x = 1
point.y = 2
point.draw();
*/ 


// class with constuctor

/*
class Point {
    x: number
    y: number

    constructor(x?: number, y?: number) {  // we can but question mark if the parameter is optional
        this.x = x;
        this.y = y;
    }

    draw() {
        // we can access x and y from the class itself
        console.log("X is " + this.x + ", Y is " + this.y)
    }
    
    getDistance(another: Point) {
        // ... do smth
        console.log("Calculating the distance ...")
    }
}

let point = new Point(1, 2)  // we don't need to give hint about type of point here
point.draw();
*/


// access modifiers enum {Public, Protected, Private}


/*
class Point {

    protected x: number  // cant be accessed out of class
    protected y: number

    constructor(x?: number, y?: number) {  // we can but question mark if the parameter is optional
        // this.x = x;
        // this.y = y;
    }
     
    draw() {
        // we can access x and y from the class itself
        console.log("X is " + this.x + ", Y is " + this.y)
    }
    
    getDistance(another: Point) {
        // ... do smth
        console.log("Calculating the distance ...")
    }

    getX() {
        return this.x
    }
}

let point = new Point(1, 2)  // we don't need to give hint about type of point here
point.draw();
let x: number = point.getX()
console.log(x)
*/
// difference between private and protected is that, private can only be accessed
// within the class, but protected can be accessed within and also extending class
