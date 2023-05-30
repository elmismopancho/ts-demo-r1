export default () => {
  let foo: any;
  foo = 3;
  foo = "Hello";
  console.log(foo);
  //          ^?

  let bar: unknown;
  bar = 4;
  bar = "World";
  console.log(bar);
  //          ^?

  foo.print();
  bar.print();

  console.log(foo + 10);
  console.log(bar + 11);
};
