export default () => {
  // Indexed Access
  type Person = {
    age: number;
    name: string;
    alive: boolean;
  };
  type Age = Person["age"];
  //   ^?
  const foo: Age = 10;
  console.log(foo);
  //          ^?

  const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
  ];

  type Human = (typeof MyArray)[number];
  const bar: Human = { name: "John", age: 25 };
  console.log(bar);
  //          ^?
};
