export default () => {
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
};
