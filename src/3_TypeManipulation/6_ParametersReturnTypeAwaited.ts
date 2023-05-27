export default () => {
  // Parameters
  function sum(a: number, b: number) {
    return a + b;
  }
  type SumArgs = Parameters<typeof sum>;
  //   ^?

  const foo: SumArgs = [2, 3];
  console.log(foo);
  //          ^?
  const firstArg: SumArgs[0] = 10;
  const secondArg: SumArgs[1] = 220;
  console.log(firstArg);
  //          ^?
  console.log(secondArg);
  //          ^?

  // ReturnType
  function buildVector(x: number, y: number, z: number) {
    return { x, y, z };
  }

  type Vector = ReturnType<typeof buildVector>;
  //   ^?
  function magnitude(v: Vector) {
    return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
  }
  console.log(magnitude({ x: 3, y: 4, z: 5 }));

  // Awaited
  function DelayedRandom() {
    const p = new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(Math.random());
      }, 1000);
    });
    return p;
  }

  type DelayedRandomReturn = Awaited<ReturnType<typeof DelayedRandom>>;
  //   ^?

  (async () => {
    let rnd: DelayedRandomReturn;
    rnd = await DelayedRandom();
    console.log(rnd);
    //          ^?
  })();

  // Demo: Test changing to Promise<string>
};
