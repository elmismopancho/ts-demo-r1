export default () => {
  let foo = 10;
  console.log(foo);
  //          ^?
  let bar = "Hellow, World!";
  console.log(bar);
  //          ^?

  //--------------------

  function human(name: string, age: number) {
    return { name, age };
  }
  const me = human("Francisco", 38);
  //         ^?
  console.log(me);
  //          ^?

  type Human = {
    name: string;
    age: number;
  };

  function birthday(human: Human): Human {
    return {
      name: human.name,
      age: human.age + 1,
    };
  }
  const olderMe = birthday(me);
  //              ^?
  console.log("Birthday", olderMe);
  //                      ^?
};
