export default () => {
  // is
  type Dog = {
    barks: () => void;
  };

  type Cat = {
    meows: () => void;
  };

  // // This doesn't works
  // function call(animal: unknown) {
  //   if (animal instanceof Dog) {
  //     animal.barks();
  //   }
  //   if (animal instanceof Cat) {
  //     animal.meows();
  //   }
  // }

  function isDog(animal: any): animal is Dog {
    return "barks" in animal;
  }

  function isCat(animal: any): animal is Cat {
    return "meows" in animal;
  }

  function call(animal: unknown) {
    if (isDog(animal)) {
      animal.barks();
      // ^?
    }
    if (isCat(animal)) {
      animal.meows();
      // ^?
    }
  }

  call({ barks: () => console.log("🐶") });
  call({ meows: () => console.log("🐱") });
};
