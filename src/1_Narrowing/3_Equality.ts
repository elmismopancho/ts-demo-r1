export default () => {
  // equality
  function add10AndPrint(foo: number | null) {
    if (foo === null) {
      console.log(foo, "foo is null");
      //          ^?
    } else {
      console.log(foo + 10);
      //          ^?
    }
  }
  add10AndPrint(null);
  add10AndPrint(5);

  //--------------------

  type User = {
    firstName: string;
    middleName?: string;
    lastName: string;
  };

  function printNameUppercase(user: User) {
    let name = user.firstName.toLocaleUpperCase();
    if (user.middleName) {
      name += " " + user.middleName.toLocaleUpperCase();
    }
    name += " " + user.lastName.toLocaleUpperCase();
    console.log(name);
  }

  printNameUppercase({
    firstName: "Francisco",
    middleName: "Javier",
    lastName: "Alcántara",
  });

  printNameUppercase({
    firstName: "John",
    lastName: "Doe",
  });
};
