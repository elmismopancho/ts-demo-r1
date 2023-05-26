export default () => {
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
};
