export default () => {
  // instanceof
  let bar: any;
  bar = [1, 2, 3];
  if (bar instanceof Array) {
    console.log(bar.length);
    //          ^?
  }
  bar = new Date(2023, 1, 10);
  if (bar instanceof Date) {
    console.log(bar.getTime());
    //          ^?
  }

  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  bar = new Person("Francisco");
  if (bar instanceof Person) {
    console.log(bar.name);
    //          ^?
  }
};
