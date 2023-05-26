{
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
}
{
  // classes
  class Bucket<T> {
    private data: T;
    constructor(data: T) {
      this.data = data;
    }
    getData() {
      return this.data;
    }
  }

  const b1 = new Bucket(100);
  let d1 = b1.getData();
  //  ^?
  console.log(d1);
  const b2 = new Bucket("Hello");
  let d2 = b2.getData();
  //  ^?
  console.log(d2);
}
{
  // types
  type Bucket<T> = {
    setData: (data: T) => void;
    getData: () => T;
  };

  function manageStringBucket(bucket: Bucket<string>) {
    const data = bucket.getData();
    //    ^?
    bucket.setData(data.toLocaleLowerCase());
  }

  function manageNumberBucket(bucket: Bucket<number>) {
    const data = bucket.getData();
    //    ^?
    bucket.setData(data + 10);
  }

  manageStringBucket({ setData: (_: string) => {}, getData: () => "" });
  manageNumberBucket({ setData: (_: number) => {}, getData: () => 0 });
}
{
  // constrains
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
}
