class Circle {
    constructor(radius, color, ...arg) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    setColor(color) {
        this.color = color;
    }
    getColor(color) {
        return this.color;
    }
    toString() {
        return JSON.stringify(this);
    }
    getArea() {
        return (this.radius * this.radius * 22 / 7);
    }
}
let circle=new Circle(7,"red");
console.log(circle);
console.log(circle.getArea());
console.log(circle.getColor());
console.log(circle.getRadius());
console.log(circle.toString());
///console.log(circle2.getArea());

let circle2=new Circle();
circle2.setColor("blue");
circle2.setRadius(8);
console.log(circle2.getArea());



