export class Point {

    constructor(private _x?: number, private y?: number) {  // we can but question mark if the parameter is optional
    }
     
    draw() {
        // we can access x and y from the class itself
        console.log("X is " + this._x + ", Y is " + this.y)
    }
    
    getDistance(another: Point) {
        // ... do smth
        console.log("Calculating the distance ...")
    }

    get x() {
        return this._x
    }
}

