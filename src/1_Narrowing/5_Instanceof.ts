export default () => {
  // instanceof
  let foo: any;
  foo = [1, 2, 3];
  if (foo instanceof Array) {
    console.log(foo.length);
    //          ^?
  }
  foo = new Date(2023, 1, 10);
  if (foo instanceof Date) {
    console.log(foo.getTime());
    //          ^?
  }

  //--------------------

  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  let bar: any;
  bar = new Person("Francisco");
  if (bar instanceof Person) {
    console.log(bar.name);
    //          ^?
  }

  type Human = {
    name: string;
  };

  function human(name: string): Human {
    return { name };
  }
  bar = human("Francisco");
  if (bar instanceof Human) {
    console.log(bar);
    //          ^?
  }
};
