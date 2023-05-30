export default () => {
  // is
  type Dog = {
    barks: () => void;
  };

  type Cat = {
    meows: () => void;
  };

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
    console.log(animal);
    //          ^?
  }

  call({ barks: () => console.log("Dog", "🐶") });
  call({ meows: () => console.log("Cat", "🐱") });
  call({
    barks: () => console.log("Catdog barks", "🐶🐱"),
    meows: () => console.log("Catdog meows", "🐱🐶"),
  });
};
