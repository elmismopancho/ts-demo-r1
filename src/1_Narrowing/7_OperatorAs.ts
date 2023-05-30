export default () => {
  function randomType(arg: number): unknown {
    if (arg < 50) {
      return "Hello World!";
    } else if (arg < 100) {
      return arg;
    }
  }

  const stringVar = randomType(16);
  //    ^?
  const forcedString = stringVar as string;
  //    ^?
  console.log("forcedString", forcedString.charAt(2));

  const numberVar = randomType(100);
  //    ^?
  const forcedNumber = numberVar as number;
  //    ^?
  console.log("forcedNumber", Math.sqrt(forcedNumber));
  console.log("numberVar", numberVar);

  //--------------------

  function printUppercase(msg: any) {
    const forceStr = msg as string;
    console.log(forceStr.toLocaleUpperCase());
  }
  printUppercase(10);
};
