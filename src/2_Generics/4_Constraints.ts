export default () => {
  // constraints
  type Lengthwise = {
    length: number;
  };

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    //              ^?
    return arg;
  }
  loggingIdentity([1, 2, 3]);

  // This also works with interfaces
  interface ILengthwise {
    length: number;
  }

  class Logger<T extends ILengthwise> {
    print(arg: T): T {
      console.log(arg.length);
      //              ^?
      return arg;
    }
  }
  const foo = new Logger();
  foo.print([0, 1]);
};
