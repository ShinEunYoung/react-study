"use strict";
// let count = 0;
// count += 1;
// const message: string = "hello world";
// const done: boolean = false;
// const number: number[] = [1, 2, 3];
// const messages: string[] = ["hello", "world"];
// let mightBeUndefined: string | undefined = undefined;
// let nullableNumber: number | null = null;
// let color: "red" | "orange" | "yellow" = "red";
// color = "orange";
// function sum(x: number, y: number): number {
//   return x + y;
// }
// const result = sum(1, 2);
// function sumArray(numbers: number[]): number {
//   return numbers.reduce((acc, current) => acc + current, 0);
// }
// const total = sumArray([1, 2, 3, 4, 5]);
// console.log(total);
// function returnNothing(): string | number {
//   console.log("어쩌고 저쩌고");
//   return 4;
// }
// interface Shape {
//   getArea(): number;
// }
// class Circle implements Shape {
//   constructor(public radius: number) {}
//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }
// class Rectangle implements Shape {
//   constructor(private width: number, private height: number) {}
//   getArea() {
//     return this.width * this.height;
//   }
// }
// const circle: Circle = new Circle(5);
// const rectangle: Rectangle = new Rectangle(2, 5);
// const shapes: Shape[] = [circle, rectangle];
// shapes.forEach((shape) => {
//   console.log(shape.getArea());
// });
// function getCircleArea(circle: Circle): number {
//   return circle.getArea();
// }
// function getRectalgleArea(rectangle: Rectangle): number {
//   return rectangle.getArea();
// }
// interface Person {
//   name: string;
//   age?: number;
// }
// interface Developer extends Person {
//   skills: string[];
// }
// type Person2 = {
//   name: string;
//   age?: number;
// };
// type Developer2 = Person2 & {
//   skills: string[];
// };
// const person: Person = {
//   name: "김사람",
//   age: 20,
// };
// const expert: Developer = {
//   name: "김개발",
//   skills: ["java"],
// };
// type People = Person[];
// const people: People = [person, expert];
// function merge<T1, T2>(a: T1, b: T2) {
//   return {
//     ...a,
//     ...b,
//   };
// }
// const merged = merge({ foo: 1 }, { bar: 2 });
// console.log(merged);
// function wrap<T>(param: T) {
//   return {
//     param,
//   };
// }
// const wrapped = wrap(10);
// interface Items<T> {
//   list: T[];
// }
// const items: Items<string> = {
//   list: ["a", "b", "c"],
// };
// type Items2<T, V> = {
//   list: T[];
//   value: V;
// };
// const items2: Items2<string, number> = {
//   list: ["a", "b", "c"],
//   value: 123,
// };
class Queue {
  constructor() {
    this.list = [];
  }
  get length() {
    return this.list.length;
  }
  enqueue(item) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
while (queue.length > 0) {
  console.log(queue.dequeue());
  console.log(queue.dequeue());
}
