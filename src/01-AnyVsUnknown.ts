{
  let foo: any;
  let bar: unknown;

  foo = 3;
  foo = "Hello";

  bar = 4;
  bar = "World";

  foo.print();
  // bar.print();

  console.log(foo + 10);
  // console.log(bar + 11);
}
