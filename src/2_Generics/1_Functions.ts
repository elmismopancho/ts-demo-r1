export default () => {
  // functions
  function identity<T>(arg: T) {
    return arg;
  }

  let foo = identity(100);
  //  ^?
  console.log(foo);
  let bar = identity("Hello");
  //  ^?
  console.log(bar);
};
