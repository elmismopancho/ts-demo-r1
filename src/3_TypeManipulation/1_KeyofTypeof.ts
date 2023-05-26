export default () => {
  //keyof
  type Foo = { x: number; y: number };

  let foo: keyof Foo;
  //   ^?
  foo = "x";
  foo = "y";
  // bar = "z" // <- build error

  type Bar = {
    [k: number]: number;
  };
  let bar: keyof Bar;
  //  ^?
  bar = 0;

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
