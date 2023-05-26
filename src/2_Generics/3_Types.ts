export default () => {
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
};
