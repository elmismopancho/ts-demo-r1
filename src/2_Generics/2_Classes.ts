export default () => {
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

  let b1 = new Bucket(100);
  //    ^?
  let d1 = b1.getData();
  console.log(d1);
  //          ^?

  let b2 = new Bucket("Hello");
  //    ^?
  let d2 = b2.getData();
  console.log(d2);
  //          ^?

  b1 = b2;
};
