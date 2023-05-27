export default () => {
  // in
  type Fish = {
    swim: () => void;
  };

  type Bird = {
    fly: () => void;
  };

  function move(animal: Fish | Bird) {
    if ("swim" in animal) {
      animal.swim();
      //^?
    }
    if ("fly" in animal) {
      animal.fly();
      //^?
    }
  }

  move({
    swim: () => console.log("swim"),
  });

  move({
    fly: () => console.log("fly"),
  });

  move({
    swim: () => console.log("swim 1"),
    fly: () => console.log("fly 1"),
  });

  //--------------------

  function error(err: any) {
    // try with unknown
    if ("message" in err) {
      console.log(err.message);
      //          ^?
      console.log(err.message());
      //          ^?
    }
  }
  error({ message: "test" });
};
