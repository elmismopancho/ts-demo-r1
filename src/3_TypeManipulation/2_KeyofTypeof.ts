export default () => {
  //keyof
  type Foo = { x: number; y: number };

  let foo: keyof Foo;
  //   ^?
  foo = "x";
  foo = "y";
  foo = "z";

  type Bar = {
    [k: number]: number;
  };
  let bar: keyof Bar;
  //  ^?
  bar = 0;
  bar = 1;

  // typeof
  const stringsEN = {
    USER: "User",
    CREATE: "Create",
  };
  const stringES: typeof stringsEN = {
    USER: "Usuario",
    CREATE: "Crear",
  };
  console.log(stringES);
  //          ^?
};
