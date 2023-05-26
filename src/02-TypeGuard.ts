{
  // equality
  function add10AndPrint(foo: number | null) {
    if (foo === null) {
      console.log(foo, "foo is null");
      //          ^?
    } else {
      console.log(foo + 10);
      //          ^?
    }
  }
  add10AndPrint(null);
  add10AndPrint(5);
}
{
  // typeof
  let foo: unknown;
  console.log(typeof foo == "undefined");

  foo = 10;
  if (typeof foo == "number") {
    console.log(foo + 1);
    //          ^?
  }

  foo = true;
  if (typeof foo == "boolean") {
    console.log(foo || false);
    //          ^?
  }

  foo = "Hello";
  if (typeof foo == "string") {
    console.log(foo.toLocaleUpperCase());
    //          ^?
  }

  foo = () => {
    console.log("out");
  };
  if (typeof foo == "function") {
    foo();
    //^?
  }

  foo = {};
  console.log(typeof foo);
  foo = [];
  console.log(typeof foo);
}

{
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
}
{
  // in
  type Fish = {
    swim: () => void;
  };

  type Bird = {
    fly: () => void;
  };

  function move(animal: Fish | Bird) {
    if ("swim" in animal) {
      animal.swim();
      //^?
    }
    if ("fly" in animal) {
      animal.fly();
      //^?
    }
  }

  move({
    swim: () => console.log("swim"),
  });

  move({
    fly: () => console.log("fly"),
  });

  move({
    swim: () => console.log("swim 1"),
    fly: () => console.log("fly 1"),
  });

  function error(err: any) {
    // try with unknown
    if ("message" in err) {
      console.log(err.message);
      //          ^?
      console.log(err.message());
      //          ^?
    }
  }
  error({ message: "test" });
}
{
  // is
  type Dog = {
    barks: () => void;
  };

  type Cat = {
    meows: () => void;
  };

  // // This doesn't works
  // function call(animal: unknown) {
  //   if (animal instanceof Dog) {
  //     animal.barks();
  //   }
  //   if (animal instanceof Cat) {
  //     animal.meows();
  //   }
  // }

  function isDog(animal: any): animal is Dog {
    return "barks" in animal;
  }

  function isCat(animal: any): animal is Cat {
    return "meows" in animal;
  }

  function call(animal: unknown) {
    if (isDog(animal)) {
      animal.barks();
      // ^?
    }
    if (isCat(animal)) {
      animal.meows();
      // ^?
    }
  }

  call({ barks: () => console.log("🐶") });
  call({ meows: () => console.log("🐱") });
}
