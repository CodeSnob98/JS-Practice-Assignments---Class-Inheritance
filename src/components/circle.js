// import using require
let obj=require('./shape');

// declare class
class Circle extends obj.Shape {
  constructor(color){
    super(color);
  }
  calculateArea() {
  }
}

// export class using module.exports
